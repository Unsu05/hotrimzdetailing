import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Sparkles,
  Car,
  Droplets,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { QuoteForm } from "@/components/quote-form"

export default function HotRimzDetailing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('/luxury-car-detailing-background.png')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
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
                  Premium mobile car detailing that comes to you. We bring showroom-quality results to your driveway
                  with cutting-edge techniques and premium products.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg" asChild>
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
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
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
                src="/images/hero-car-detail.png"
                alt="Premium luxury car being detailed with professional equipment"
                width={800}
                height={600}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Premium <span className="text-red-500">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional mobile detailing services with transparent pricing. Choose from our core packages or add
              premium services.
            </p>
          </div>

          {/* Core Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">Core Detailing Services</h3>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Interior Services */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-red-500 mb-6 flex items-center">
                  <Car className="mr-3 h-6 w-6" />
                  Interior Detailing
                </h4>

                {/* Interior Gold */}
                <Card className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Interior Detail - Gold</h5>
                        <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30 mb-3">
                          Essential Clean
                        </Badge>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Vacuuming</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Wipe-down of surfaces</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Interior windows</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Plastics cleaning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Light stain removal</span>
                      </li>
                    </ul>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Sedan</p>
                        <p className="font-bold text-red-500">$79.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">SUV</p>
                        <p className="font-bold text-red-500">$89.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Truck/Van</p>
                        <p className="font-bold text-red-500">$99.99</p>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link
                        href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Interior Gold
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Interior Platinum */}
                <Card className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300 ring-2 ring-red-600/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Interior Detail - Platinum</h5>
                        <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30 mb-3">
                          Premium Deep Clean
                        </Badge>
                      </div>
                      <Badge className="bg-red-600 text-white">Popular</Badge>
                    </div>

                    <p className="text-gray-300 mb-3 text-sm">Everything in Gold plus:</p>

                    <ul className="space-y-2 mb-6 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Full carpet and seat extraction</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Leather reconditioning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Deep sanitization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>UV protection</span>
                      </li>
                    </ul>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Sedan</p>
                        <p className="font-bold text-red-500">$99.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">SUV</p>
                        <p className="font-bold text-red-500">$109.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Truck/Van</p>
                        <p className="font-bold text-red-500">$119.99</p>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link
                        href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Interior Platinum
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Exterior & Full Services */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-red-500 mb-6 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Exterior & Full Services
                </h4>

                {/* Exterior Wash */}
                <Card className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-semibold text-white mb-4">Exterior Wash</h5>

                    <ul className="space-y-2 mb-6 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Hand wash</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Tire dressing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Rim cleaning</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Windows</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-red-500" />
                        <span>Bug/tar removal</span>
                      </li>
                    </ul>

                    <div className="text-center mb-4">
                      <div className="bg-gray-800 rounded p-3 inline-block">
                        <p className="text-sm text-gray-400">All Vehicle Sizes</p>
                        <p className="text-2xl font-bold text-red-500">$49.99</p>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link
                        href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Exterior Wash
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Full Detail Gold */}
                <Card className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h5 className="text-xl font-semibold text-white mb-2">Full Detail - Gold</h5>
                    <p className="text-gray-300 mb-4 text-sm">Exterior Wash + Interior Gold</p>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Sedan</p>
                        <p className="font-bold text-red-500">$119.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">SUV</p>
                        <p className="font-bold text-red-500">$129.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Truck/Van</p>
                        <p className="font-bold text-red-500">$139.99</p>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link
                        href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Full Detail Gold
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Full Detail Platinum */}
                <Card className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300 ring-2 ring-red-600/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-xl font-semibold text-white">Full Detail - Platinum</h5>
                      <Badge className="bg-red-600 text-white">Best Value</Badge>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">Exterior Wash + Interior Platinum</p>

                    <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Sedan</p>
                        <p className="font-bold text-red-500">$139.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">SUV</p>
                        <p className="font-bold text-red-500">$149.99</p>
                      </div>
                      <div className="bg-gray-800 rounded p-2">
                        <p className="text-xs text-gray-400">Truck/Van</p>
                        <p className="font-bold text-red-500">$159.99</p>
                      </div>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link
                        href="https://app.squareup.com/appointments/book/c8h2b65cb3p60y/LSC66SQ9XSWZV/start"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Full Detail Platinum
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Add-On Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">Add-On Services</h3>
            <p className="text-center text-gray-300 mb-8">Enhance your detail with these premium add-ons</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { name: "Engine Bay Cleaning", price: "$24.99", icon: Zap },
                { name: "Pet Hair Removal", price: "$24.99", icon: Car },
                { name: "Odour Elimination", price: "$29.99", icon: Shield },
                { name: "Salt Stain Removal", price: "$19.99", icon: Droplets },
                { name: "Trim Restoration", price: "$24.99", icon: Sparkles },
                { name: "Glass Coating", price: "$14.99", icon: Shield },
                { name: "Floor Mat Shampoo", price: "$9.99", icon: Car },
                { name: "Headlight Restoration", price: "$39.99", icon: Zap },
                { name: "Wheel Deep Clean", price: "$19.99", icon: Car },
                { name: "Interior Ceramic Spray", price: "$14.99", icon: Shield },
              ].map((addon, index) => (
                <Card
                  key={index}
                  className="bg-black border-gray-800 hover:border-red-600/50 transition-all duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <addon.icon className="h-5 w-5 text-red-500" />
                    </div>
                    <h6 className="font-semibold text-white mb-2 text-sm">{addon.name}</h6>
                    <p className="text-red-500 font-bold text-lg">{addon.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Types */}
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-white">Service Options</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Mobile Detailing</h4>
                      <p className="text-red-500">We come to you</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Convenient service at your location. You provide water and electricity access.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Service at your home or office</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>No travel required</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-red-500" />
                      <span>Watch the process</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Pick & Drop</h4>
                      <p className="text-red-500">Full-service convenience</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">We handle pickup and delivery — no setup required on your end.</p>
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

            <div className="mt-6 text-center">
              <p className="text-gray-300">
                <span className="text-red-500 font-semibold">Note:</span> Travel fee applies for service outside Guelph
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="text-red-500">Hot Rimz?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not just another car wash. We're automotive perfectionists who bring professional-grade detailing
                directly to your location in Guelph and surrounding areas.
              </p>

              <div className="space-y-6">
                {[
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
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from satisfied customers across Guelph
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Chen",
                vehicle: "BMW M3",
                rating: 5,
                review:
                  "Absolutely incredible work! My M3 looks better than the day I bought it. The ceramic coating is amazing - water just beads right off.",
              },
              {
                name: "Sarah Johnson",
                vehicle: "Mercedes C-Class",
                rating: 5,
                review:
                  "Professional, punctual, and perfectionist. The convenience of mobile service is unmatched. Will definitely be using Hot Rimz regularly.",
              },
              {
                name: "David Rodriguez",
                vehicle: "Audi RS5",
                rating: 5,
                review:
                  "The paint correction work was phenomenal. Removed years of swirl marks and scratches. My car looks showroom fresh again!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-black border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.review}"</p>
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

      {/* Contact/Booking Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="text-red-500">Transform</span> Your Ride?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book your premium detailing service today. We'll come to you anywhere in Guelph and surrounding areas.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Call or Text</p>
                    <p className="text-gray-300">(519) 555-RIMZ</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">info@hotrimzdetailing.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Service Area</p>
                    <p className="text-gray-300">Guelph & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/hot-rimz-logo.jpg"
                  alt="Hot Rimz Detailing Logo"
                  width={100}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Premium mobile car detailing services in Guelph, Ontario. We bring showroom-quality results to your
                driveway.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 bg-transparent">
                  Facebook
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 bg-transparent">
                  Instagram
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Signature Detail
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Paint Correction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Ceramic Coating
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-500">
                    Interior Detailing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(519) 555-RIMZ</li>
                <li>info@hotrimzdetailing.com</li>
                <li>Guelph, ON</li>
                <li>Mon-Sat: 8AM-6PM</li>
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
