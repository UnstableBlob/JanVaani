"use client";
import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.push("/dashboard"); // redirect after login
      } else {
        router.push("/login");
      }
    });
  }, [router]);

  return <p>Loading...</p>;
}
