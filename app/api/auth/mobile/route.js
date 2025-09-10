// import { NextResponse } from "next/server";
// import { supabase } from "@/lib/supabaseClient";

// export async function POST(req) {
//   const { phone } = await req.json();

//   const { data, error } = await supabase.auth.signInWithOtp({ phone });

//   if (error) return NextResponse.json({ error: error.message }, { status: 400 });
//   return NextResponse.json({ message: "OTP sent to mobile", data });
// }
import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(req) {
  const { phone } = await req.json();

  const { data, error } = await supabase.auth.signInWithOtp({
    phone,
    options: {
      shouldCreateUser: true
    }
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ message: "OTP sent to mobile", data });
}
