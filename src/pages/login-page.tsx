import LoginForm from "@/components/login";
import { ThemeHeader } from "@/layouts/theme-header";
import Footer from "@/layouts/Footer";
const LoginPage = () => {
  return (
  <>
    <ThemeHeader/>
    <main className="h-screen w-full flex items-center justify-center">
      <LoginForm />
    </main>
    <Footer/>
  </>
  );
};

export default LoginPage;
