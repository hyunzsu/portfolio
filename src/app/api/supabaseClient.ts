import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getAboutData() {
  const [
    { data: experiences },
    { data: licenses },
    { data: educations },
    { data: skills },
  ] = await Promise.all([
    supabase.from("experiences").select("*"),
    supabase.from("licenses").select("*"),
    supabase.from("educations").select("*"),
    supabase.from("skills").select("*"),
  ]);

  return { experiences, licenses, educations, skills };
}

export async function getProjectData() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("intro", { ascending: true });

  if (error) {
    console.error("Error fetching project data:", error);
    return null;
  }

  return projects;
}
