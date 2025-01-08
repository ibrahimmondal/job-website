import { getJobs } from "@/api/jobs";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner';

export default function AllJobs() {
  const {isLoaded} = useUser()
  const {data: job, loading: jobLoaded, fetchData: fetchJobs} = useFetch(getJobs)
  useEffect(()=> {
   if (isLoaded) {
    fetchJobs()
   }
  }, [isLoaded])

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


    return (
        <>
        {
            jobLoaded === false && <div>
         {
            job.map((job) => (
                <div key={job.id}>
                    <h1>{job.title}</h1>
                    <p>{job.description}</p>
                </div>
            ))}
            </div>
        }
        </>
    )
}
