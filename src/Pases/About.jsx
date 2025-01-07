
import { Card, CardContent } from "@/components/ui/card"
// import { AnimatedCounter } from "@/Layoutes/AnimatedCounter"

// import ContactForm from './contact-form'

export default function About() {
  return (
    <div className="min-h-screen  from-blue-100 to-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About JobConnect</h1>
        
        {/* Mission Statement Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            At JobConnect, we're on a mission to revolutionize the job search experience. We believe that finding the right job should be as exciting as starting one. Our platform is designed to seamlessly connect talented professionals with companies that value their skills and potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <AnimatedCounter end={5000} label="Job Listings" />
            <AnimatedCounter end={10000} label="Companies" />
            <AnimatedCounter end={100000} label="Successful Placements" /> */}
            
          </div>
        </div>
      </section>

      {/* Team Showcase Section */}
      <section className="bg-muted py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jane Doe", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
              { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
              { name: "Emily Brown", role: "Head of HR", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-lg mb-4">
                Founded in 2023, JobConnect was born from a simple idea: job searching and hiring should be easier, 
                more transparent, and more human. Our founders, having experienced the frustrations of traditional 
                job boards and recruitment processes, set out to create a platform that puts people first.
              </p>
              <p className="text-lg">
                Since then, we've grown from a small startup to a thriving community of job seekers and employers, 
                all united by the goal of creating meaningful professional connections.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/03/g4.jpg" 
                alt="JobConnect team at work" 
                width={400} 
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    width={100} 
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-center text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Transparency in all our operations</li>
            <li>Commitment to user privacy and data security</li>
            <li>Continuous innovation to improve user experience</li>
            <li>Fostering a diverse and inclusive job market</li>
            <li>Providing exceptional support to our community</li>
          </ul>
        </section>

        
      </main>
    </div>
  )
}

const teamMembers = [
  { name: "Jane Doe", role: "CEO & Co-founder", image: "/placeholder.svg?height=100&width=100" },
  { name: "John Smith", role: "CTO & Co-founder", image: "/placeholder.svg?height=100&width=100" },
  { name: "Alice Johnson", role: "Head of Customer Success", image: "/placeholder.svg?height=100&width=100" },
]

