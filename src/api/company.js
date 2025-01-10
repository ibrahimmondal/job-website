import supabaseClient from "@/utils/supabase";
// import supabase from "@/utils/supabase";


  export async function getcompany (token) {
    const supabase = await supabaseClient(token)
    let query = supabase.from("companies").select("*")
   


    const { data, error} = await query;
    
    if(error){
      console.log(error);
      return null;
      
    }
    return data;
  }