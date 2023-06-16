import testBgImg from "../img/carouselItem4.jpg";
import authImg from "../img/auth2.png";
import Button from "./button";
export default function Testimonials() {
  return (
    <>
      <div
        className="flex items-center justify-center  py-10 px-5  h-[60vh] bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${testBgImg})`,
        }}
      >
        <div className="w-full mx-auto  text-gray-800 dark:text-gray-50 flex ">
          <div className="w-full  mx-auto ">
            <img
              alt="profil"
              src={authImg}
              className="mx-auto object-cover rounded-full h-20 w-20 "
            />

            <div className="w-full mx-auto">
              <p className="text-xl text-gray-500 my-4 dark:text-gray-300 text-center">
                John McKenzey, Californi
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-100 px-5 pt-4 lg:w-1/3 text-center mx-auto">
                Thank you so much. I really didn’t expect such a quick and
                positive response! Often when something goes wrong with a
                product it seems the consumer is the one that gets the “raw end
                of the deal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-between lg:px-20 px-10 space-y-4 lg:space-y-0 flex-wrap py-10 items-center bg-slate-100">
        <h3 className="">
          Excited about what's waiting for you? Check out our new summer
          collection.
        </h3>
        <Button />
      </div>
    </>
  );
}
