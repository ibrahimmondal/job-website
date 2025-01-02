// import Image from 'next/image'

export default function JobSteps() {
  const steps = [
    {
      number: "01",
      title: "Register an account to start"
    },
    {
      number: "02",
      title: "Explore over thousands of resumes"
    },
    {
      number: "03",
      title: "Find the most suitable candidate"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-square max-w-[500px] mx-auto relative">
            <div className="absolute inset-0 "></div>
            <img
              src="/images/download.png"
              alt="Job seeker illustration"
              width={600}
              height={600}
              className="relative z-10"
              priority
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Find Jobs with 3 easy steps
          </h2>
          <p className="text-gray-600 mb-12">
            Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <span className="text-4xl font-light text-gray-200">
                  {step.number}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

