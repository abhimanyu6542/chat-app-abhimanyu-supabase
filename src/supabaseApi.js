import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://lvsqekmhlfnfgnmqhzgn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2c3Fla21obGZuZmdubXFoemduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3MDUyODEsImV4cCI6MTk4OTI4MTI4MX0.17cvlLTZJnbMxXNu-6sAEyriYT7yqqFYmmOBmMuar4U"
);