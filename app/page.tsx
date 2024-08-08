import FooterSection from "@/components/footer-section";
import MainPage from "@/components/main";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      <MainPage />
      <FooterSection />
    </div>
  );
}
