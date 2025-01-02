import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, Palette, BarChartIcon as ChartBar, Stethoscope } from 'lucide-react'

const categories = [
  { name: "Business", icon: Briefcase },
  { name: "Technology", icon: Code },
  { name: "Design", icon: Palette },
  { name: "Marketing", icon: ChartBar },
  { name: "Healthcare", icon: Stethoscope },
]

export default function JobCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Job Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6">
          {categories.map((category) => (
            <Card key={category.name} className="group text-center border-0 hover:bg-primary transition duration-75 dark:border">
              <CardHeader>
                <category.icon className="group-hover:text-white mx-auto h-12 w-12 text-primary" />
                <CardTitle className="group-hover:text-white">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-white">Explore jobs</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

