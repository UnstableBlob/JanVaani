import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabaseClient";

export async function GET() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: "http://localhost:3000/auth/callback" },
  });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.redirect(data.url);
}
