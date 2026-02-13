import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const ZEPTOMAIL_API_KEY = Deno.env.get("ZEPTOMAIL_API_KEY");
const ZEPTOMAIL_API_URL = "https://api.zeptomail.com/v1.1/email";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  phone: string;
  category: string;
  description: string;
  images?: string[]; // base64 encoded images
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, category, description, images }: EmailRequest = await req.json();

    console.log("Processing email request for:", { name, email, category });

    // Build image list HTML from base64
    let imagesHtml = "";
    if (images && images.length > 0) {
      imagesHtml = `
        <h3 style="color: #228b57; margin-top: 20px;">Item Images:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${images.map((base64, index) => `<img src="${base64}" alt="Item image ${index + 1}" style="max-width: 200px; border-radius: 8px;" />`).join('')}
        </div>
      `;
    }

    // Email to admin
    const adminEmailPayload = {
      from: {
        address: "noreply@scrapit.ng",
        name: "ScrapIt Notifications"
      },
      to: [
        {
          email_address: {
            address: "hello@scrapit.ng",
            name: "ScrapIt Team"
          }
        }
      ],
      subject: `New Item Submission - ${category}`,
      htmlbody: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #228b57;">New Item Submission</h1>
          <p>A new item has been submitted for evaluation.</p>
          
          <h2 style="color: #228b57; margin-top: 20px;">Customer Details:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          
          <h2 style="color: #228b57; margin-top: 20px;">Item Details:</h2>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Description:</strong> ${description}</p>
          
          ${imagesHtml}
          
          <p style="margin-top: 30px; color: #666;">Please review and respond within 24 hours.</p>
        </div>
      `
    };

    // Email to customer
    const customerEmailPayload = {
      from: {
        address: "noreply@scrapit.ng",
        name: "ScrapIt"
      },
      to: [
        {
          email_address: {
            address: email,
            name: name
          }
        }
      ],
      subject: "We've Received Your Item Submission!",
      htmlbody: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #228b57;">Thank you for choosing ScrapIt!</h1>
          <p>Hi ${name},</p>
          <p>We have successfully received your item submission and our team is reviewing it.</p>
          
          <h2 style="color: #228b57; margin-top: 20px;">Submission Details:</h2>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Description:</strong> ${description}</p>
          
          <div style="background-color: #f0f9f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>What's Next?</strong></p>
            <p style="margin: 10px 0 0 0;">Our team will evaluate your item and send you a competitive quote within 24 hours.</p>
          </div>
          
          <p>If you have any questions, feel free to contact us:</p>
          <p>Email: hello@scrapit.ng<br/>Phone: 0806 208 6832</p>
          
          <p style="margin-top: 30px; color: #666;">Best regards,<br/>The ScrapIt Team</p>
        </div>
      `
    };

    // Send admin email
    const adminResponse = await fetch(ZEPTOMAIL_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminEmailPayload),
    });

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text();
      console.error("Failed to send admin email:", errorText);
      throw new Error(`Failed to send admin email: ${errorText}`);
    }

    console.log("Admin email sent successfully");

    // Send customer email
    const customerResponse = await fetch(ZEPTOMAIL_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Zoho-enczapikey ${ZEPTOMAIL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerEmailPayload),
    });

    if (!customerResponse.ok) {
      const errorText = await customerResponse.text();
      console.error("Failed to send customer email:", errorText);
      throw new Error(`Failed to send customer email: ${errorText}`);
    }

    console.log("Customer email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-item-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
