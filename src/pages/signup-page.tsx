import SignupForm from "@/components/signup";
import Footer from "@/layouts/Footer";
import { ThemeHeader } from "@/layouts/theme-header";

const SignupPage = () => {
  return (
    <>
    <ThemeHeader/>
      <main className="h-screen w-full flex items-center justify-center">
        <SignupForm />
      </main>
      <Footer />
    </>
  );
};

export default SignupPage;
