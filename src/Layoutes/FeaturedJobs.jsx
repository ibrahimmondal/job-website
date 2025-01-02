import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredJobs = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "San Francisco, CA", type: "Full-time" },
  { id: 2, title: "Product Manager", company: "InnovateCo", location: "New York, NY", type: "Full-time" },
  { id: 3, title: "UX Designer", company: "DesignHub", location: "Remote", type: "Contract" },
  { id: 4, title: "Data Analyst", company: "DataDrive", location: "Chicago, IL", type: "Part-time" },
]

export default function FeaturedJobs() {
  return (
    <div className="bg-muted">
      <section className="py-16 max-w-[1280px] mx-auto">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{job.company}</p>
                <p className="text-muted-foreground">{job.location}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Badge variant="secondary">{job.type}</Badge>
                <Button>Apply</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">View All Jobs</Button>
        </div>
      </div>
    </section>
    </div>
  )
}

