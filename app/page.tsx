import type { Metadata } from "next"
import type { ReactNode } from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Car,
  CheckCircle,
  Clock,
  Droplets,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

import { QuoteForm } from "@/components/quote-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Hot Rimz Detailing – Every Detail Matters",
  description:
    "Premium mobile car detailing in Guelph. Every detail matters – interior, exterior, and full packages for a showroom shine.",
}

const ratingStars = Array.from({ length: 5 })

const coreInteriorServices = [
  {
    name: "Interior Detail - Essentials",
    badge: { label: "Essential Clean", tone: "yellow" },
    features: [
      "Vacuuming",
      "Wipe-down of surfaces",
      "Interior windows",
      "Plastics cleaning",
      "Light stain removal",
    ],
    prices: [
      { label: "Sedan", amount: "$79.99" },
      { label: "Mid Size SUV", amount: "$99.99" },
      { label: "Large SUV/Truck/Van", amount: "$119.99" },
    ],
    cta: "Book Interior Essentials",
  },
  {
    name: "Interior Detail - Premium",
    badge: { label: "Premium Deep Clean", tone: "purple" },
    highlight: "Popular",
    description: "Everything in Essentials plus:",
    features: [
      "Shampoo of Mats and Seats",
      "Vent Cleaning",
      "Deep Plastic Restoration",
      "Leather Conditioning",
      "Salt Removal",
    ],
    prices: [
      { label: "Sedan", amount: "$149.99" },
      { label: "Mid Size SUV", amount: "$179.99" },
      { label: "Large SUV/Truck/Van", amount: "$199.99" },
    ],
    cta: "Book Interior Premium",
  },
]

const coreExteriorServices = [
  {
    name: "Exterior Detail - Essentials",
    badge: { label: "Essential Shine", tone: "yellow" },
    features: [
      "Two bucket hand wash",
      "Wheel and tire cleaning",
      "Door jamb wipe down",
      "Tire shine",
      "Spray wax application",
    ],
    prices: [
      { label: "Sedan", amount: "$79.99" },
      { label: "Mid Size SUV", amount: "$89.99" },
      { label: "Large SUV/Truck/Van", amount: "$109.99" },
    ],
    cta: "Book Exterior Essentials",
  },
  {
    name: "Exterior Detail - Signature",
    badge: { label: "Signature Finish", tone: "purple" },
    highlight: "Top Choice",
    description: "Everything in Essentials plus:",
    features: [
      "Clay bar treatment",
      "Iron decontamination",
      "6 month ceramic sealant",
      "Trim restoration",
      "Wheel coating",
    ],
    prices: [
      { label: "Sedan", amount: "$179.99" },
      { label: "Mid Size SUV", amount: "$199.99" },
      { label: "Large SUV/Truck/Van", amount: "$229.99" },
    ],
    cta: "Book Exterior Signature",
  },
]

const fullDetailPackages = [
  {
    name: "Full Detail - Gold",
    badge: { label: "Complete Refresh", tone: "yellow" },
    features: [
      "Interior Essentials",
      "Exterior Essentials",
      "Windows inside & out",
      "Door jamb deep clean",
      "Trim dressing",
    ],
    prices: [
      { label: "Sedan", amount: "$189.99" },
      { label: "Mid Size SUV", amount: "$219.99" },
      { label: "Large SUV/Truck/Van", amount: "$249.99" },
    ],
    cta: "Book Full Detail Gold",
  },
  {
    name: "Full Detail - Platinum",
    badge: { label: "Showroom Finish", tone: "purple" },
    highlight: "Most Popular",
    description: "Everything in Gold plus:",
    features: [
      "Shampoo of carpets & seats",
      "Leather conditioning",
      "Engine bay detail",
      "6 month ceramic sealant",
      "Interior protection",
    ],
    prices: [
      { label: "Sedan", amount: "$269.99" },
      { label: "Mid Size SUV", amount: "$299.99" },
      { label: "Large SUV/Truck/Van", amount: "$329.99" },
    ],
    cta: "Book Full Detail Platinum",
  },
]

const addOnServices = [
  { name: "Engine Bay Cleaning", price: "$24.99", icon: Zap },
  { name: "Pet Hair Removal", price: "$24.99", icon: Car },
  { name: "Odour Elimination", price: "$29.99", icon: Shield },
  { name: "Salt Stain Removal", price: "$19.99", icon: Droplets },
  { name: "Trim Restoration", price: "$24.99", icon: Sparkles },
  { name: "Glass Coating", price: "$14.99", icon: Shield },
  { name: "Floor Mat Shampoo", price: "$9.99", icon: Car },
  { name: "Headlight Restoration", price: "$39.99", icon: Zap },
]

const serviceFeatures = [
  {
    icon: Clock,
    title: "Mobile Convenience",
    description: "We come to you - home, office, or anywhere in Guelph",
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "Only the finest detailing products and equipment",
  },
  {
    icon: Star,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee on all services",
  },
]

const testimonials = [
  {
    name: "Imad Syed",
    vehicle: "Mercedes-Benz GLE 450",
    rating: 5,
    review: "Absolutely incredible work! My GLE looks better than the day I bought it.",
  },
  {
    name: "Sarah Johnson",
    vehicle: "Acura MDX",
    rating: 5,
    review:
      "Professional, punctual, and perfectionist. The convenience of mobile service is unmatched.",
  },
  {
    name: "David Rodriguez",
    vehicle: "Audi RS5",
    rating: 5,
    review: "The interior restore was magnificent! My car looks showroom fresh again!",
  },
]

const quickLinks = [
  { label: "Interior Detailing", href: "#services" },
  { label: "Exterior Detailing", href: "#services" },
  { label: "Full Detail Packages", href: "#services" },
  { label: "Premium Services", href: "#services" },
]

const contactDetails = [
  { icon: Phone, value: "(519) 760-5748" },
  { icon: Mail, value: "hotrimzdetailing@gmail.com" },
  { icon: MapPin, value: "Guelph, ON" },
  { icon: Clock, value: "Mon-Sat: 8AM-6PM" },
]

export default function HotRimzDetailing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-red-600/20">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/hot-rimz-logo.jpg"
              alt="Hot Rimz Detailing Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-red-500 transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-red-500 transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Link
              href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </Link>
          </Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[url('/luxury-car-detailing-background.png')] bg-cover bg-center opacity-10" />

          <div className="container mx-auto px-4 lg:px-6 relative z-10 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                    Premium Mobile Detailing • Guelph, ON
                  </Badge>
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Your Car
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                      Deserves
                    </span>
                    <span className="block">Perfection</span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Premium mobile car detailing that comes to you. We bring showroom-quality results to your driveway with
                    cutting-edge techniques and premium products.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                    asChild
                  >
                    <Link
                      href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Your Detail
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
                  >
                    View Services
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {ratingStars.map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-red-500 text-red-500" />
                      ))}
                    </div>
                    <span className="text-gray-300">5.0 Rating</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="font-semibold text-white">500+</span> Cars Detailed
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-3xl" />
                <Image
                  src="/images/hero-car-detail.jpg"
                  alt="Premium luxury car being detailed with professional equipment"
                  width={800}
                  height={600}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 lg:px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Premium <span className="text-red-500">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Professional mobile detailing services with transparent pricing. Choose from our core packages or add premium
                upgrades.
              </p>
            </div>

            <div className="space-y-12">
              <ServiceGroup
                title="Interior Detailing"
                icon={<Car className="mr-3 h-6 w-6" />}
                services={coreInteriorServices}
              />
              <ServiceGroup
                title="Exterior Detailing"
                icon={<Sparkles className="mr-3 h-6 w-6" />}
                services={coreExteriorServices}
              />
              <ServiceGroup
                title="Full Detail Packages"
                icon={<Shield className="mr-3 h-6 w-6" />}
                services={fullDetailPackages}
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-center mb-4 text-white">Add-On Services</h3>
              <p className="text-center text-gray-300 mb-8">Enhance your detail with these premium add-ons</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {addOnServices.map((addon) => {
                  const Icon = addon.icon
                  return (
                    <Card
                      key={addon.name}
                      className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300"
                    >
                      <CardContent className="p-4 text-center space-y-2">
                        <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto">
                          <Icon className="h-6 w-6 text-red-500" />
                        </div>
                        <h6 className="font-semibold text-white">{addon.name}</h6>
                        <p className="text-red-500 font-bold">{addon.price}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-8 grid md:grid-cols-2 gap-8">
              <Card className="bg-black border-gray-700">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Mobile Detailing</h4>
                      <p className="text-red-500">We come to you</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Professional mobile detailing at your home or workplace. Power and water supplied when needed.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Fully equipped service vehicle</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Perfect for home or office</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-700">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Pick & Drop Service</h4>
                      <p className="text-red-500">Full-service convenience</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    We handle pickup and delivery — no setup required on your end.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Complete convenience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>No setup required</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Professional facility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Why Choose <span className="text-red-500">Hot Rimz?</span>
              </h2>
              <p className="text-xl text-gray-300">
                We're not just another car wash. We're automotive perfectionists who bring professional-grade detailing
                directly to your location in Guelph and surrounding areas.
              </p>
              <div className="space-y-6">
                {serviceFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-red-600/20 to-transparent rounded-2xl blur-3xl" />
              <Image
                src="/images/professional-equipment.jpg"
                alt="Professional car detailing equipment and products"
                width={600}
                height={600}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                What Our <span className="text-red-500">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300">
                Don't just take our word for it - hear from satisfied customers across Guelph.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-black border-gray-800">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-red-500 text-red-500" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.review}"</p>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-red-500 text-sm">{testimonial.vehicle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">Request a Custom Quote</h2>
              <p className="text-xl text-gray-300">
                Tell us about your vehicle and detailing goals. We'll craft a package tailored to your needs.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <div
                      key={detail.value}
                      className="flex items-center space-x-3 bg-gray-900/70 border border-gray-800 rounded-xl px-4 py-3"
                    >
                      <Icon className="h-5 w-5 text-red-500" />
                      <span className="text-gray-300">{detail.value}</span>
                    </div>
                  )
                })}
              </div>
              <div className="bg-red-600/10 border border-red-600/30 rounded-xl p-4 text-sm text-red-200">
                We service Guelph, Kitchener-Waterloo, Cambridge, Milton, and surrounding areas. Travel fees may apply outside
                of Guelph.
              </div>
            </div>

            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-gray-800 py-12" id="footer">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Image
                src="/images/hot-rimz-logo.jpg"
                alt="Hot Rimz Detailing logo"
                width={140}
                height={70}
                className="h-12 w-auto"
              />
              <p className="text-gray-400">
                Premium mobile detailing in Guelph and surrounding areas. We treat every vehicle as if it were our own.
              </p>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-red-500" />
                <span>(519) 760-5748</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-red-500" />
                <span>hotrimzdetailing@gmail.com</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-red-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Premium Packages</h4>
              <ul className="space-y-2 text-gray-400">
                {fullDetailPackages.map((pkg) => (
                  <li key={pkg.name}>
                    <Link href="#services" className="hover:text-red-500">
                      {pkg.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                {contactDetails.map((detail) => (
                  <li key={`footer-${detail.value}`}>{detail.value}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hot Rimz Detailing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ServiceInfo {
  name: string
  badge: { label: string; tone: "yellow" | "purple" }
  highlight?: string
  description?: string
  features: string[]
  prices: { label: string; amount: string }[]
  cta: string
}

interface ServiceGroupProps {
  title: string
  icon: ReactNode
  services: ServiceInfo[]
}

function ServiceGroup({ title, icon, services }: ServiceGroupProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-center mb-6 text-white flex items-center justify-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="grid lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card
            key={service.name}
            className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300"
          >
            <CardContent className="p-6 space-y-5">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                  <Badge
                    className={
                      service.badge.tone === "purple"
                        ? "bg-purple-600/20 text-purple-400 border-purple-600/30"
                        : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                    }
                  >
                    {service.badge.label}
                  </Badge>
                </div>
                {service.highlight ? (
                  <Badge className="bg-red-600 text-white">{service.highlight}</Badge>
                ) : null}
              </div>

              {service.description ? (
                <p className="text-gray-300 text-sm">{service.description}</p>
              ) : null}

              <ul className="space-y-2 text-gray-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-2 text-center">
                {service.prices.map((price) => (
                  <div key={price.label} className="bg-gray-800 rounded p-2">
                    <p className="text-xs text-gray-400">{price.label}</p>
                    <p className="font-bold text-red-500">{price.amount}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link
                  href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.cta}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
