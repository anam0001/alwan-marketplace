import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your Alwan account.",
};

export default function SignUpPage() {
  return <AuthForm mode="signup" />;
}
