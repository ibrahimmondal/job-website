
import { getJobs } from "@/api/jobs";
import { useEffect } from "react";


export default function AllJobs() {
  const fetchjobs = async () => {
    const data = await getJobs()
    console.log(data);
    
  }
  useEffect(() => {
fetchjobs()
  }, [])
}
