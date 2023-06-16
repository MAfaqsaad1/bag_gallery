import ItemCart from "./ItemCart";
import data from "../Data";
export default function Gallery() {
  console.log(data.prouctData);
  return (
    <section className="overflow-hidden text-gray-700 py-6">
      <div className="container px-6 py-2 mx-auto lg:py-12 lg:px-24 justify-center">
        <h1 className="uppercase text-center text-4xl mb-10">
          WE MAKE YOU AWESOME
        </h1>
        <div className="flex w-full justify-center ">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-6">
            {data.prouctData.map((item, index) => {
              return (
                <ItemCart
                  img={item.img}
                  title={item.title}
                  disc={item.disc}
                  price={item.price}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
