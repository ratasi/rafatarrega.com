import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Pages/Home/Navbar";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
