"use client"
import FooterSection from "@/components/footer-section";
import MainPage from "@/components/main";
import { BubbleChat } from 'flowise-embed-react'


export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      <MainPage />
      <FooterSection />
    </div>


  );
}
