import About from "../components/About";
import Hero from "../components/Hero";
import PackageList from "../components/PackageList";
import PlannerForm from "../components/PlannerForm";
import ReviewSection from "../components/ReviewSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <PlannerForm />

      <PackageList />
      <About />
      <ReviewSection />
    </div>
  );
}
