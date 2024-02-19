import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cvtmgfsnvhvbawewtwjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2dG1nZnNudmh2YmF3ZXd0d2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTkxNzgsImV4cCI6MjAyMzkzNTE3OH0.K3TUysGqrg8cHHtiM4-CPHQ2lG1GaqvYwL5bP_HhsRU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
