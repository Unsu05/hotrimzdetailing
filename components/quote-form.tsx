"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { sendQuoteEmail } from "@/app/actions/send-quote"

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage(null)

    try {
      const result = await sendQuoteEmail(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        // Reset form
        const form = document.getElementById("quote-form") as HTMLFormElement
        form?.reset()
      } else {
        setMessage({ type: "error", text: result.message })
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Sorry, there was an error sending your request. Please call us directly at (519) 555-RIMZ.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Get Your Quote</h3>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-600/20 border border-green-600/30 text-green-400"
                : "bg-red-600/20 border border-red-600/30 text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form id="quote-form" action={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              required
              className="bg-black border-gray-700 text-white placeholder-gray-400"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              required
              className="bg-black border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="bg-black border-gray-700 text-white placeholder-gray-400"
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="bg-black border-gray-700 text-white placeholder-gray-400"
          />
          <Input
            name="vehicle"
            placeholder="Vehicle Make & Model"
            required
            className="bg-black border-gray-700 text-white placeholder-gray-400"
          />
          <select name="service" required className="w-full p-3 bg-black border border-gray-700 rounded-md text-white">
            <option value="">Select Service</option>
            <option value="interior-gold">Interior Detail - Gold</option>
            <option value="interior-platinum">Interior Detail - Platinum</option>
            <option value="exterior-wash">Exterior Wash</option>
            <option value="full-gold">Full Detail - Gold</option>
            <option value="full-platinum">Full Detail - Platinum</option>
            <option value="custom">Custom Package</option>
          </select>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
            {isSubmitting ? "Sending..." : "Get My Quote"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
