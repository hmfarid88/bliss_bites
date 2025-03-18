
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="container min-h-[65vh]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
        <Hero />
       </main>
    </div>
  );
}
