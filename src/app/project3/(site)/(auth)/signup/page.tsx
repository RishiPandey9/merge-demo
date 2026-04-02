import SignUp from "@/components/project3/Auth/SignUp";
import Breadcrumb from "@/components/project3/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Sustainable",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign Up Page" />

      <SignUp />
    </>
  );
};

export default SignupPage;
