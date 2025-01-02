import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, Briefcase } from 'lucide-react'

const tips = [
  { title: "Tailor Your Resume", content: "Customize your resume for each job application", icon: Lightbulb },
  { title: "Set Clear Goals", content: "Define your career objectives and target roles", icon: Target },
  { title: "Network", content: "Build professional relationships and attend industry events", icon: Users },
  { title: "Gain Experience", content: "Consider internships or volunteer work in your field", icon: Briefcase },
]

export default function JobSearchTips() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Job Search Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <Card key={tip.title}>
              <CardHeader>
                <tip.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tip.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

