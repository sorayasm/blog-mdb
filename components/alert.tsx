// Sass
import cn from "classnames";

// Components
import Container from "./container";

// Libs
import { CMS_NAME, MDB_PATH } from "../lib/constants";

export default function Alert() {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": "",
        "bg-accent-1 border-accent-2": "",
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          Un blog generado usando Next.js, Wordpress, Tailwind CSS, DaisyUI y{" "}
          <a
            href={MDB_PATH}
            className="underline hover:text-success duration-200 transition-colors"
          >
            {CMS_NAME}
          </a>
          .
        </div>
      </Container>
    </div>
  );
}
