import type { Route } from "./+types/index";
import Mypage from "~/components/mypage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "P Square Enterprise ! Welcome" },
    { name: "description", content: "Gloves Manufacturer" },
  ];
}

export default function Home() {
  return (
    <section>
      <Mypage/>
    </section>
  );
}
