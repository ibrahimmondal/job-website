import { getJobs } from "@/api/jobs";
import useFetch from "@/hooks/useFetch";
import JobCard from "@/Layoutes/JobCard";
import SkeletonDemo from "@/Layoutes/SkeletonDemo";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { ThreeDots } from 'react-loader-spinner';
import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getcompany } from "@/api/company";
import { Button } from "@/components/ui/button";



export default function AllJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser()
  const { data: job, loading: jobLoaded, fetchData: fetchJobs } = useFetch(getJobs,{searchTerm, company_id})
  const { data: companies,  fetchData: fetchCompany } = useFetch(getcompany)
  useEffect(() => {
    if (isLoaded) {
      fetchJobs()
    }
  }, [isLoaded, searchTerm, company_id])
  useEffect(() => {
    if (isLoaded) {
      fetchCompany()
    }
  }, [isLoaded])

  const handleSearch = (e) => {
    e.preventDefault()
   const formData = new FormData(e.target)
   console.log(formData);
   const query = formData.get('search-job')
   if(query){
     setSearchTerm(query)
   }
  }

  if (!isLoaded) {
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
const clearFilter = () => {
  setSearchTerm("")
  setCompany_id("")
  value=""
}


  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="py-6 text-center">
          <h1 className="text-3xl font-semibold">Job listing</h1>
        </div>
        <div className="flex gap-5 items-center "> 
          <div className="w-full mx-auto mt-10 border rounded-lg mb-10">
            <div className="p-2 bg-card rounded-lg shadow-lg">
              <form onSubmit={handleSearch}>
              <div className="flex-1 flex items-center ">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                  type="text"
                  name="search-job"
                  placeholder="Job title or keyword"
                  className="w-full focus:outline-none text-gray-700 bg-card"
                />
              </div>
              </form>
            </div>
          </div>
          <div>
            <Select value={company_id} onValueChange={(value) => setCompany_id(value)} className="broder-none">
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    companies.map(({name, id}) => {
                      return(
                        <SelectItem key={id} value={id}>{name}</SelectItem>                   
                      );
                    })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={clearFilter}>Clear Filter</Button>
        </div>
         {jobLoaded ? (
             <div className="flex justify-center">
             <SkeletonDemo />
           </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {job.length === 0 || null ? (
                  <div className="text-red-500 pb-4 font-semibold">No Job Found!</div>
                ) : (
                  job?.map((job) => (
                       <div>
                         <JobCard key={job.id} job={job} />
                       </div>
                  )
                )
                )}
              </div>
            )}
      </div>
    </>
  )
}
