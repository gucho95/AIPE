import ImageCard, { mockDataImageCard } from "@/components/Card/ImageCard";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section id="main" className="mt-1">
        <div className="grid grid-cols-3 gap-x-4 px-4">
          <ImageCard {...mockDataImageCard[0]} />
          <ImageCard {...mockDataImageCard[1]} />
          <ImageCard {...mockDataImageCard[2]} />
        </div>
      </section>
      <section id="workshop" className="py-36">
        workshop workshop workshop
      </section>
      <section id="inspiration" className="py-36">
        inspiration inspiration inspiration
      </section>
    </Fragment>
  );
}
