import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(req) {
  const { email } = await req.json();

  const { data, error } = await supabase.auth.signInWithOtp({ email });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ message: "OTP sent to email", data });
}
