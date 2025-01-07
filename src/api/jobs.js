

// let { data: job, error } = await supabase
//   .from('job')
//   .select('*')
// let { data: job, error } = await supabase
//   .from('job')
//   .select('*')

import supabase from "@/utils/supabase";


  export async function getJobs (){
    let puery = supabase.from("job").select("*")
    const { data, error} = await puery
    
    if(error){
      console.log(error);
      return null;
      
    }
    return data;
  }