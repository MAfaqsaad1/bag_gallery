import Video from "./sectionVideo";
function Counter() {
  return (
    <>
      <div className="content text-center px-10 pt-10">
        <h2 className="uppercase text-3xl md:text-4xl lg:text-5xl">ABOUT Us</h2>
        <p className=" lg:w-2/3 mx-auto py-8">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit.
        </p>
      </div>
      <div className=" hidden md:block">
        <Video />
      </div>
      <section className=" w-2/3 mx-auto pb-10">
        <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
          <div className="group">
            <i class="fa-solid fa-truck text-4xl pb-3 text-gray-500 group-hover:text-red-600"></i>
            <h5 className="text-2xl font-bold ">24h</h5>
            <p className=" tracking-wide  font-medium uppercase text-gray-500">
              AVARAGE DELIVERY TIME
            </p>
          </div>
          <div className="group">
            <i class="fa-solid fa-bag-shopping text-4xl text-gray-500 pb-3 group-hover:text-red-600"></i>
            <h5 className="text-2xl font-bold">3291</h5>
            <p className=" tracking-wide  font-medium uppercase text-gray-500 ">
              PRODUCTS SOLD
            </p>
          </div>
          <div className="group">
            <i class="fa-solid fa-face-smile text-4xl pb-3 text-gray-500 group-hover:text-red-600"></i>
            <h5 className="text-2xl font-bold">98%</h5>
            <p className=" tracking-wide  font-medium uppercase text-gray-500">
              HAPPY CLIENTS
            </p>
          </div>
          <div className="group">
            <i class="fa-solid fa-calendar-check text-4xl pb-3 text-gray-500 group-hover:text-red-600"></i>
            <h5 className="text-2xl font-bold">30</h5>
            <p className=" tracking-wide  font-medium uppercase text-gray-500">
              YEARS OF EXPERIENCE
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
