import { getJobs, getSingleJob, updatedHiringStatus } from '@/api/jobs';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import { ThreeDots } from 'react-loader-spinner';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Calendar, Building, UserPen, ExternalLink } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ApplyJobDialog } from '@/Layoutes/ApplyJobDialog';
import { ApplicationCard } from '@/Layoutes/ApplicationCard';
// import { A } from '@clerk/clerk-react/dist/useAuth-Bu7xegV8';

export default function JobDetails() {
  const {id} = useParams();
  const {isLoaded, user} = useUser();
// console.log(id);
const {data: job, loading: jobLoaded, fetchData: fetchSingleJob} = useFetch(getSingleJob, {id})
const { data: jobs,  fetchData: fetchJobs } = useFetch(getJobs);
useEffect(() => {
  if (isLoaded) {
    fetchJobs().catch(console.error)
  }
}, [isLoaded])
useEffect(()=> {
if(isLoaded){
  fetchSingleJob().catch(console.error)
}
},[isLoaded])

console.log(jobs);


const { fetchData: fetchHiringStatus } = useFetch(updatedHiringStatus, { id });

  const handleStatusChange = (value) => {
    const isOpen = value === true;
    fetchHiringStatus(isOpen)
      .then(() => fetchSingleJob())
      .catch(console.error);
  };

 if (!isLoaded || jobLoaded) {
    return (
      <div className="flex items-center justify-center h-[394px]">
        <ThreeDots
          visible={true}
          height="75"
          width="75"
          color="#0891b2"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
        />
      </div>
    );
  }
  
  return (
    
    <div className="max-w-[1280px] mx-auto px-4 py-8">
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
              
              <CardTitle className="text-lg">{job?.companies?.name}</CardTitle>
              {/* <CardTitle className="text-lg">{job?.applications?.length}</CardTitle> */}
            </div>
            <Badge variant="secondary">{job.type}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 mb-6">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-muted-foreground" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-muted-foreground" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-muted-foreground" />
              <span>Posted: {job.posted}</span>
            </div>
            <div>
           {
            job?.isOpen ? (<div className='flex items-center'>
                  <ExternalLink className="w-5 h-5 mr-2 text-muted-foreground" />
              <h1>Job open</h1>
              </div>) : (<div className='flex items-center '>
                <ExternalLink className="w-5 h-5 mr-2 text-muted-foreground" />
               <h1>Job closed</h1>
              </div>)
           }
           </div>
               <div>
               {
                job?.recruiter_id === user?.id && (<div className="flex items-center">
                  <UserPen className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span> Applicants: {job?.applications?.length}</span>
                  </div>) || (<div className="flex items-center">{null}</div>)
              }
               </div>
           
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Job Description</h3>
            <p>{job.description}</p>
            <h4 className="text-lg font-semibold">Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>{job.responsibilities}</li>
            </ul>
            <h4 className="text-lg font-semibold">Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1">            
                <li>{job.requirements}</li>
            </ul>
          </div>
          {job?.recruiter_id === user.id ? (
  <div className="flex items-center space-x-2 mt-8">
    <Switch id="job-status" checked={job?.isOpen} onCheckedChange={handleStatusChange} />
    <Label htmlFor="job-status">{job.isOpen ? "Closed" : "Open"}</Label>
  </div>
) : job?.isOpen ? (
  <div className="mt-8">
    {/* <Button size="lg">Apply Now</Button> */}
    <ApplyJobDialog job={job}
          user={user}
          fetchJob={fetchSingleJob}
          applied={job.applications?.find(
            (application) => application.candidate_id == user.id
          )} />
  </div>
) : (
  <div className="mt-8">
    <Button size="lg" disabled>
      Job Closed
    </Button>
  </div>
)}        
        </CardContent>
      </Card>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Company Info</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-muted-foreground" />
              <span>{job?.companies?.name}</span>
            </div>
            {/* Add more company details here */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Related Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {jobs.map((jobs) => (
                <li key={jobs.id}>
                  <a href={`/jobs/${jobs.id}`} className="block hover:bg-muted p-2 rounded">
                    <div className="font-semibold">{jobs.title}</div>
                    {/* <img src={jobs.companies.logo_url} className="w-24 h-9 object-cover" /> */}
                    <div className="text-sm text-muted-foreground">{jobs.companies.name}</div>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        { job?.applications?.length > 0 && job?.recruiter_id === user.id && (
          <Card>
          <CardHeader>
            <CardTitle>Recent Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
             {
              job?.applications?.length > 0 && job?.recruiter_id === user.id && (
                   <div>
                   {
                    job?.applications.map((applications) => {
                    return(
                      <ApplicationCard key={applications.id} applications={applications} /> 
                    )
                    })
                   }
                   </div>
              )
             }
            </ul>
          </CardContent>
        </Card>
        )
          
        }
      </div>
    </div>
  </div>
  )
}
