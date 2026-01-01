import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
config();

const supabase = createClient(process.env.URL, process.env.APIKEY);

export default supabase;
