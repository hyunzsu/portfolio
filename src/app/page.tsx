import About from "./about/page";
import Main from "./main/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <section className="">
      <Main />
      <About />
      <Projects />
    </section>
  );
}
