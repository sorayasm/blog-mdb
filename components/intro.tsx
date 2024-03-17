import { CMS_NAME, CMS_URL } from "../lib/constants";
import ThemeToggler from "./ThemeToggler";

export default function Intro() {
  return (
    <div className={"flex flex-col justify-center align-middle mt-16"}>
      <ThemeToggler />
      <section className="flex-col text-center md:flex-row justify-center mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          {CMS_NAME}
        </h1>
        <h4 className="text-center text-lg mt-5 md:pl-8 !pl-0">
          Un blog creado con Next.js, Wordpress, Tailwind CSS, DaisyUI y
          contenido de{" "}
          <a
            href={CMS_URL}
            className="underline hover:text-success duration-200 transition-colors"
          >
            {CMS_NAME}
          </a>
        </h4>
      </section>
    </div>
  );
}
