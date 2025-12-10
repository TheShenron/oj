// import { getToken } from "next-auth/jwt";
// import { useSession } from "next-auth/react";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LandingPage() {

  // if (status === "authenticated") {
  //   redirect("/dashboard");
  // }

  redirect("/login");

}
