import { Card, CardHeader, CardContent, CardTitle} from '@/components/ui/card';
import { Search, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router';

export default function JobCard({job}) {
  console.log(job);
  return (
    <div>
        <Card key={job.id}>
    <CardHeader>
            <img src={job.companies.logo_url}  className="w-24 h-9 object-cover " />
    <CardTitle>{job.title}</CardTitle>
    </CardHeader>
    <CardContent>
    <p className="text-smtext-gray-600">{job.company}</p>
    <p className="text-sm text-gray-600 flex items-center mt-2 gap-2">
    <MapPin className="w-4 h-4 мг-1" />
    {job.location}
    </p>
    <p className="text-sm font-semibold mt-2">{job.salary}</p>
    <Button className="w-full mt-4" >
      <Link >Apply Now</Link>
    </Button>
    </CardContent>
    </Card>
    </div>
  )
}
