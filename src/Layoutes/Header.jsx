import { useEffect, useState } from "react"
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Bell, User, Briefcase, FileText, MessageSquare, LogIn } from 'lucide-react'
import { Link, NavLink, useSearchParams } from "react-router"
import ThemeToggle from "@/components/mode-toggle"
// import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const {user} = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
 const loginRemove = (e) => {
 if(e.target === e.currentTarget){
  setShowLogin(false)
  setSearch({})
 }
 }
 const closeMenu = (e) => setIsMenuOpen(false)

const [search, setSearch] = useSearchParams()
useEffect(() => {
if(search.get("sign-in")){
  setShowLogin(true)

}
},[search])

  return (
    <header className="sticky top-0 shadow-md bg-[#E6FAFF] dark:bg-[#0A1B1F] z-50">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              {/* <Briefcase className="h-8 w-auto sm:h-10 text-primary" /> */}
              <span className="ml-2 text-xl font-bold dark:text-white text-gray-900">JobRex</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
            Home
            </Link>
            <Link to="/jobs" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
            Jobs
            </Link>
            <Link to="/my-jobs" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
            My jobs
            </Link>
            {/* <Link to="/applicant" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
            Applicant
            </Link>
            <Link to="/Post-Job" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
            Post Job
            </Link> */}
            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white">
            About
            </Link>
           
          </nav>

          {/* Search bar
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="relative w-full max-w-lg lg:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <Input
                type="text"
                placeholder="Search jobs..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div> */}

          {/* User actions */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-2">
            <Button variant="ghost" size="icon" className="ml-4">
              <Bell className="h-5 w-5" aria-hidden="true" />
            </Button>
           
            <SignedIn>
            <UserButton appearance={{elements:{avatarBox:"size-10"}}}>
              <UserButton.MenuItems>
              <UserButton.Link
              label="My job"
              labelIcon={<Briefcase />}
              href="/my-jobs"
            />
              </UserButton.MenuItems>
            </UserButton>
            </SignedIn>
            <SignedOut>
            <Button variant="ghost" size="icon" className="ml-4" onClick={() => setShowLogin(true)}>
              <User className="h-5 w-5" aria-hidden="true" />
           </Button>
            </SignedOut>
           {
            user?.unsafeMetadata.role === "recruiter" && (
              <NavLink to="/job-post">
              <Button variant="default" className="ml-8" as={NavLink} >
              Post a Job
            </Button>
              </NavLink>
            )
           }
           
          </div>
           <div className="hidden md:block">
           <ThemeToggle/>
           
           </div>
        </div>
      </div>
      {
        showLogin && (<div className="fixed inset-0 flex items-center justify-center bg-gray-600/70 text-accent-foreground " onClick={loginRemove}><SignIn signUpForceRedirectUrl="/onboard" fallbackRedirectUrl="/onboard"/></div>)
      }
      

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  {/* <Briefcase className="h-8 w-auto text-primary" /> */}
                  <h2 className="font-semibold" onClick={closeMenu}>JobRex</h2>
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/jobs" className="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50">
                    <Briefcase className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900" onClick={closeMenu}>Find Jobs</span>
                  </Link>
                  <Link href="/companies" className="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50">
                    <FileText className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900" onClick={closeMenu}>Companies</span>
                  </Link>
                  <Link href="/resources" className="flex items-center -m-3 p-3 rounded-md hover:bg-gray-50">
                    <MessageSquare className="flex-shrink-0 h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900" onClick={closeMenu}>Resources</span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/profile" className="text-base font-medium text-gray-900 hover:text-gray-700" onClick={closeMenu}>
                  Profile
                </Link>
                <Link href="/notifications" className="text-base font-medium text-gray-900 hover:text-gray-700" onClick={closeMenu}>
                  Notifications
                </Link>
              </div>
              <div>
                <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark" >
                  Post a Job
                </Button>
                <p className="mt-6 text-center text-base font-medium text-gray-500" onClick={closeMenu}>
                  New to JobRex?{' '}
                  <Link href="/signup" className="text-primary hover:text-primary-dark" onClick={() => setShowLogin(true)}>
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

