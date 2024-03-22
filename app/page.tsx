import Bertanya from "@/components/Bertanya";
import ChooseTemplate from "@/components/ChooseTemplate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="hero poppins mt-4">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl text-center px-5">
          Generate chat mu agar tidak di blokir dosen
        </h1>
      </div>
      <ChooseTemplate />
      <Footer />
    </main>
  );
}
