// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, toEmail, smtpConfig } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !toEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpConfig?.host || 'smtp.gmail.com',
      port: smtpConfig?.port || 587,
      secure: smtpConfig?.secure || false,
      auth: {
        user: smtpConfig?.user,
        pass: smtpConfig?.pass,
      },
      tls: {
        rejectUnauthorized: false // For testing, remove in production
      }
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('SMTP Server is ready to take messages');
    } catch (verifyError) {
      console.error('SMTP Verification Error:', verifyError);
      return NextResponse.json(
        { error: 'SMTP server configuration error' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Date: ${new Date().toLocaleString()}

Message:
${message}

--- 
This message was sent from your restaurant website contact form.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(to right, #f59e0b, #d97706); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #4b5563; }
    .value { color: #1f2937; }
    .message-box { background: white; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Contact Form Submission</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">From your restaurant website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value">${phone || 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Date & Time:</div>
        <div class="value">${new Date().toLocaleString()}</div>
      </div>
      <div class="message-box">
        <div class="label" style="margin-bottom: 10px;">Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
        This message was sent from your restaurant website contact form. 
        Click <a href="mailto:${email}">here</a> to reply directly to ${name}.
      </p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    });
    
  } catch (error: any) {
    console.error('Email sending error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message 
      },
      { status: 500 }
    );
  }
}