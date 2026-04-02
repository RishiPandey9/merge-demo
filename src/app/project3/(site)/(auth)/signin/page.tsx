import Signin from "@/components/project3/Auth/SignIn";
import Breadcrumb from "@/components/project3/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign In | Sustainable",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sign In Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
