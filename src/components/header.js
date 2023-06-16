import headerImg1 from "../img/carouselItem1.jpg";

import Button from "./button";

export default function Header() {
  return (
    <>
      <div className="">
        <header
          className="h-[89vh] bg-cover bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${headerImg1})`,
          }}
        >
          <div className="header_content flex  px-10 h-full  items-center text-center justify-center">
            <div className="text-white">
              <h1 className="uppercase text-2xl md:text-3xl lg:text-6xl">
                THE STYLE FOR TODAY
              </h1>
              <p className="my-6 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing. Vel
                pellentesque consequat.
              </p>
              <Button />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
