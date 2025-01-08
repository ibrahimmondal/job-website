import supabaseClient from "@/utils/supabase";
// import supabase from "@/utils/supabase";


  export async function getJobs (token){
    const supabase = await supabaseClient(token)
    let puery = supabase.from("jobs").select("*")
    const { data, error} = await puery
    
    if(error){
      console.log(error);
      return null;
      
    }
    return data;
  }