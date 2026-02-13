const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Helper function to send email with retry
async function sendEmailWithRetry(mailOptions, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        },
        connectionTimeout: 60000,
        greetingTimeout: 30000,
        socketTimeout: 60000
      });

      const info = await transporter.sendMail(mailOptions);
      return { success: true, info };
    } catch (error) {
      console.log(`Attempt ${i + 1} failed:`, error.message);
      if (i === retries - 1) throw error;
      // Wait 2 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
}

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 New Portfolio Message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header with gradient -->
            <tr>
              <td style="background: linear-gradient(135deg, #8B5CF6, #EC4899); padding: 30px;">
                <h1 style="margin: 0; color: white; font-size: 24px; font-weight: 600;">📬 New Contact Form Submission</h1>
                <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 16px;">Your portfolio website received a new message</p>
              </td>
            </tr>
            
            <!-- Content -->
            <tr>
              <td style="padding: 30px;">
                
                <!-- From badge -->
                <div style="background-color: #f3f4f6; border-radius: 8px; padding: 12px; margin-bottom: 24px;">
                  <p style="margin: 0; font-size: 14px; color: #4b5563;">
                    <span style="font-weight: 600;">📝 This message was sent from your portfolio contact form</span>
                  </p>
                </div>
                
                <!-- Sender details card -->
                <div style="border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
                  <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #1f2937; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">
                    👤 Sender Information
                  </h2>
                  
                  <table width="100%" style="border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; width: 100px; color: #6b7280; font-weight: 500;">Name:</td>
                      <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Email:</td>
                      <td style="padding: 8px 0;">
                        <a href="mailto:${email}" style="color: #8B5CF6; text-decoration: none; font-weight: 500;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Subject:</td>
                      <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${subject}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Received:</td>
                      <td style="padding: 8px 0; color: #1f2937; font-weight: 500;">${new Date().toLocaleString()}</td>
                    </tr>
                  </table>
                </div>
                
                <!-- Message card -->
                <div style="border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; background-color: #fafafa; margin-bottom: 24px;">
                  <h2 style="margin: 0 0 12px 0; font-size: 16px; color: #1f2937; display: flex; align-items: center;">
                    <span style="margin-right: 8px;">💬</span> Message Content
                  </h2>
                  <div style="background-color: white; border-radius: 8px; padding: 16px; border: 1px solid #e5e7eb;">
                    <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                
                <!-- Footer note -->
                <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center;">
                  <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                    This email was sent from your portfolio website contact form.
                  </p>
                  <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 12px;">
                    © ${new Date().getFullYear()} Nandu Vasanthi Portfolio
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    const result = await sendEmailWithRetry(mailOptions);
    
    if (result.success) {
      console.log('Email sent successfully:', result.info.messageId);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  } catch (error) {
    console.error('Final error after retries:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again later.',
      details: error.message 
    });
  }
});

module.exports = router;