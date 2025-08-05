"use server"

export async function sendQuoteEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const vehicle = formData.get("vehicle") as string
  const service = formData.get("service") as string

  // Create the email content
  const emailContent = `
New Quote Request from Hot Rimz Detailing Website

Customer Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Vehicle: ${vehicle}
- Service Requested: ${service}

Please follow up with this customer as soon as possible.

Sent from Hot Rimz Detailing Website
  `.trim()

  try {
    // Using a simple email service - you can replace this with your preferred email service
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "YOUR_SERVICE_ID", // You'll need to set this up with EmailJS
        template_id: "YOUR_TEMPLATE_ID", // You'll need to set this up with EmailJS
        user_id: "YOUR_USER_ID", // You'll need to set this up with EmailJS
        template_params: {
          to_email: "hotrimzdetailing@gmail.com",
          from_name: `${firstName} ${lastName}`,
          from_email: email,
          message: emailContent,
          subject: "New Quote Request - Hot Rimz Detailing",
        },
      }),
    })

    if (response.ok) {
      return { success: true, message: "Quote request sent successfully! We'll get back to you within 24 hours." }
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your request. Please call us directly at (519) 555-RIMZ.",
    }
  }
}
