import { FeaturedCourses } from "@/src/components/FeaturedCourses";
import HeroSection from "@/src/components/HeroSection";
import MusicSchoolTestimonials from "@/src/components/TestimonialCards";
import { UpcomingWebinars } from "@/src/components/UpcomingWebinars";
import WhyChooseUs from "@/src/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
}
