import { useState } from 'react'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, ChevronUp, Mail } from 'lucide-react'
import { Link } from 'react-router'

export default function Footer() {
  const [email, setEmail] = useState('')
  // e: React.FormEvent
  const handleSubmit = () => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Subscribing email:', email)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About JobRex</h3>
            <p className="text-sm mb-4">
              JobHub is your gateway to career opportunities. We connect talented professionals with leading companies across various industries.
            </p>
            <Button>
              Learn More
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/jobs" className=" transition-colors hover:text-primary">Find Jobs</Link></li>
              <li><Link href="/post-job" className=" transition-colors hover:text-primary">Post a Job</Link></li>
              <li><Link href="/resources" className="transition-colors hover:text-primary">Career Resources</Link></li>
              <li><Link href="/companies" className=" transition-colors hover:text-primary">Companies</Link></li>
              <li><Link href="/salary" className="transition-colors hover:text-primary">Salary Calculator</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-primary">Career Blog</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className=" text-xl font-bold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><Link href="/post-job" className=" transition-colors hover:text-primary">Post a Job</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link></li>
              <li><Link href="/resources/employers" className="transition-colors hover:text-primary">Employer Resources</Link></li>
              <li><Link href="/ats" className="transition-colors hover:text-primary">Applicant Tracking System</Link></li>
              <li><Link href="/partnerships" className="hover:text-primary  transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className=" text-xl font-bold mb-4">Stay Connected</h3>
            <p className="mb-4 text-sm">Get the latest job opportunities and career advice delivered to your inbox.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" className="rounded-l-none">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Media and Additional Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-primary transition-colors hover:text-black dark:hover:text-white">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-primary hover:text-black transition-colors dark:hover:text-white">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-primary hover:text-black transition-colors dark:hover:text-white">
              <LinkedIn className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-primary hover:text-black transition-colors dark:hover:text-white">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} JobRex. All rights reserved.</p>
          <Button 
            
            size="sm" 
            onClick={scrollToTop}
          >
            Back to Top <ChevronUp className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}

