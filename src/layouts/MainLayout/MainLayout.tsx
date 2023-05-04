import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Pages/Home/Navbar";
import { MainLayoutProps } from "./MainLayout.types";

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="container mx-auto ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
