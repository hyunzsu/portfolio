import Main from "./main/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <section className="">
      <Main />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
