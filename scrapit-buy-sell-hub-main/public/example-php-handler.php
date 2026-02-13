<?php
/**
 * Example PHP handler for ScrapIt form submissions
 * 
 * Setup Instructions:
 * 1. Upload this file to your PHP server
 * 2. Install PHPMailer: composer require phpmailer/phpmailer
 * 3. Update the email credentials below
 * 4. Update WEBHOOK_URL in src/pages/Index.tsx to point to this file's URL
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$required = ['name', 'email', 'phone', 'category', 'description'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Missing required field: $field"]);
        exit();
    }
}

// Sanitize input
$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone']);
$category = htmlspecialchars($data['category']);
$description = htmlspecialchars($data['description']);
$timestamp = $data['timestamp'] ?? date('Y-m-d H:i:s');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Handle images if provided
$uploadedImages = [];
if (isset($data['images']) && is_array($data['images'])) {
    $uploadDir = __DIR__ . '/uploads/';
    
    // Create uploads directory if it doesn't exist
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }
    
    foreach ($data['images'] as $index => $base64Image) {
        // Extract the base64 data
        if (preg_match('/^data:image\/(\w+);base64,/', $base64Image, $matches)) {
            $imageType = $matches[1];
            $base64Data = substr($base64Image, strpos($base64Image, ',') + 1);
            $imageData = base64_decode($base64Data);
            
            // Generate unique filename
            $filename = 'item_' . time() . '_' . $index . '.' . $imageType;
            $filepath = $uploadDir . $filename;
            
            // Save the image
            if (file_put_contents($filepath, $imageData)) {
                $uploadedImages[] = $filepath;
            }
        }
    }
}

// Import PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // Change to your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@gmail.com'; // Your email
    $mail->Password   = 'your-app-password'; // Your app password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('your-email@gmail.com', 'ScrapIt Website');
    $mail->addAddress('scrapitnow975@gmail.com', 'ScrapIt Team');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Price Evaluation Request - $category";
    
    $imageCount = count($uploadedImages);
    $imagesInfo = $imageCount > 0 ? "<div class='field'><span class='label'>Images:</span><br><span class='value'>$imageCount image(s) attached</span></div>" : "";
    
    $mail->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #228b57; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f5f5f5; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #333; }
            .value { color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Price Evaluation Request</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <span class='label'>Name:</span><br>
                    <span class='value'>$name</span>
                </div>
                <div class='field'>
                    <span class='label'>Email:</span><br>
                    <span class='value'>$email</span>
                </div>
                <div class='field'>
                    <span class='label'>Phone:</span><br>
                    <span class='value'>$phone</span>
                </div>
                <div class='field'>
                    <span class='label'>Category:</span><br>
                    <span class='value'>$category</span>
                </div>
                <div class='field'>
                    <span class='label'>Description:</span><br>
                    <span class='value'>$description</span>
                </div>
                $imagesInfo
                <div class='field'>
                    <span class='label'>Submitted:</span><br>
                    <span class='value'>$timestamp</span>
                </div>
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->AltBody = "New Price Evaluation Request\n\n"
                   . "Name: $name\n"
                   . "Email: $email\n"
                   . "Phone: $phone\n"
                   . "Category: $category\n"
                   . "Description: $description\n"
                   . "Images: $imageCount attached\n"
                   . "Submitted: $timestamp";

    // Attach images to email
    foreach ($uploadedImages as $imagePath) {
        $mail->addAttachment($imagePath);
    }

    $mail->send();
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully'
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email',
        'details' => $mail->ErrorInfo
    ]);
}
?>