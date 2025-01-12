import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle} from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ApplicationCard({applications}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 hover:bg-muted p-2 rounded cursor-pointer border mb-2">
            <img src="https://avatars.githubusercontent.com/u/56189302?v=4" alt="ibrahim mondal" className="w-10 h-10 rounded-full" />
            <div>
            <h1 className="">Ibrahim mondal</h1>
            <p className="text-muted-foreground text-[13px]">Frontend Developer</p>
            </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Frontend Developer</DialogTitle>         
        </DialogHeader>
        <div className='mb-5'>
        <Card >
    <CardHeader>
           <div className="flex items-center justify-between">
           {/* <img src={job.companies.logo_url}  className="w-24 h-9 object-cover " /> */}
           {/* <Badge variant="secondary" className="mt-[-16px]">{job.type}</Badge> */}
           </div>
    {/* <CardTitle>{job.title}</CardTitle> */}
    <p className="text-smtext-gray-600 font-semibold">Education: <span className="font-normal">{applications.education}</span></p>
    <p className="text-smtext-gray-600 font-semibold">Skill: <span className="font-normal">{applications.skill}</span></p>

    </CardHeader>
    <CardContent>
    <p className="text-sm text-gray-600 flex items-center gap-2">
    {/* <MapPin className="w-4 h-4 мг-1" />
    {job.location} */}
    </p>
    <p className="text-sm font-semibold my-2">Experience: <span className="font-normal">{applications.experience} year</span></p>
    <time className="flex flex-col gap-1 text-xs font-bold uppercase text-gray-900 dark:text-gray-300">
          <span className="">Date: {new Date(applications.created_at).toLocaleDateString()}</span>
          <span>Time: {new Date(applications.created_at).toLocaleTimeString()}</span>
        </time>
    {/* <Button className="w-full mt-4" >
      <Link to={`/jobs/${job.id}`}>Apply Now</Link>
    </Button> */}
    </CardContent>
    </Card>
    </div>
        <div className="flex justify-between">
            <Button>Download Resume</Button>
            <Select>
            <SelectTrigger className="w-[180px] bg-primary text-primary-foreground hover:bg-primary/90 border-none font-semibold">
              <SelectValue placeholder="Application Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Applied">Applied</SelectItem>
              <SelectItem value="Reviewed">Reviewed</SelectItem>
              <SelectItem value="Accepted">Accepted</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  )
}
