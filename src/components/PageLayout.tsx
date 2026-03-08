import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
