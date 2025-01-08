
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseClient = async (supabaseToken) => {
    const supabase = createClient (supabaseUrl, supabaseKey,{
        global: {
            headers:{Authorization: `Bearer ${supabaseToken}`}
        }
    })
    return supabase;
}

export default supabaseClient
        