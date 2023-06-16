import team1 from "../img/member1.jpg";
import team2 from "../img/member2.jpg";
import team3 from "../img/member3.jpg";
export default function Team() {
  return (
    <section className="bg-white md:px-20 px-6 py-10">
      <div className=" ">
        <div className="container  mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
            The Executive Team
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
      </div>

      <div className="container px-6 mx-auto ">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center pb-6 rounded-xl bg-[#e5e5e5]">
            <img
              className="object-cover w-full rounded-xl"
              src={team1}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
              arthur melo
            </h1>

            <p className="mt-2 text-gray-500 capitalize">design director</p>
          </div>

          <div className="flex flex-col items-center pb-6 rounded-xl bg-[#e5e5e5]">
            <img
              className="object-cover w-full rounded-xl"
              src={team2}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
              Pamela Anderson
            </h1>

            <p className="mt-2 text-gray-500 capitalize">Lead Developer</p>
          </div>

          <div className="flex flex-col items-center pb-6 rounded-xl bg-[#e5e5e5]">
            <img
              className="object-cover w-full rounded-xl"
              src={team3}
              alt=""
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
              John Doe
            </h1>

            <p className="mt-2 text-gray-500 capitalize">
              Full stack developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
