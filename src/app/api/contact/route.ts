import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    
    console.log('Received form data:', { name, email, message })

    // Fix: createTransport (niet createTransporter)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email naar jou
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'arashmahdawi@gmail.com',
      subject: `Nieuw bericht van ${name} via portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nieuw contactformulier bericht</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Bericht:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Dit bericht is verzonden via je portfolio contactformulier.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    
    console.log('Email sent successfully')
    return NextResponse.json({ success: true, message: 'Email verzonden!' })
    
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message }, 
      { status: 500 }
    )
  }
}
