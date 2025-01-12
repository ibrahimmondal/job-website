import { Card, CardHeader, CardContent, CardTitle} from '@/components/ui/card';
import { Search, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Link } from 'react-router';

export default function JobCard({job}) {
  // console.log(job);
  return (
    <div className='mb-5'>
        <Card key={job.id}>
    <CardHeader>
           <div className="flex items-center justify-between">
           <img src={job.companies.logo_url}  className="w-24 h-9 object-cover " />
           <Badge variant="secondary" className="mt-[-16px]">{job.type}</Badge>
           </div>
    <CardTitle>{job.title}</CardTitle>
    <p className="text-smtext-gray-600">{job.companies.name}</p>
    </CardHeader>
    <CardContent>
    <p className="text-sm text-gray-600 flex items-center gap-2">
    <MapPin className="w-4 h-4 мг-1" />
    {job.location}
    </p>
    <p className="text-sm font-semibold mt-2">{job.salary}</p>
      <Link to={`/jobs/${job.id}`}>
    <Button className="w-full mt-4" >
      Apply Now
    </Button>
      </Link>
    </CardContent>
    </Card>
    </div>
  )
}
