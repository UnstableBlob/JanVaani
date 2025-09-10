// import { NextResponse } from "next/server";
// import { supabase } from "../../../lib/supabaseClient";

// export async function POST(req) {
//   const { email } = await req.json();

//   const { data, error } = await supabase.auth.signInWithOtp({ email });

//   if (error) return NextResponse.json({ error: error.message }, { status: 400 });
//   return NextResponse.json({ message: "OTP sent to email", data });
// }

// import { NextResponse } from "next/server";
// import { supabase } from "../../../lib/supabaseClient";

// export async function POST(req) {
//   const { email } = await req.json();

//   const { data, error } = await supabase.auth.signInWithOtp({
//     email,
//     options: {
//       shouldCreateUser: true,  // allow signup if new
//       emailRedirectTo: null    // prevent auto redirect magic link
//     }
//   });

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json({ message: "OTP sent to email", data });
// }


import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(req) {
  const { email } = await req.json();

  // This will now send a 6-digit OTP instead of magic link
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: undefined, // prevents link mode
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ message: "OTP sent to email", data });
}
