import Image from "next/image";
import Login from "@/pages/login";

export default function Home() {
  return (
    <div className="font-sans grid min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Login />
    </div>
  );
}
