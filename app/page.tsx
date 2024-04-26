import ChooseTemplate from "@/components/ChooseTemplate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="hero poppins mt-4">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl text-center px-5">
          Simple Chat-Dosen Generator
        </h1>
      </div>
      <ChooseTemplate />
      <Footer />
    </main>
  );
}
