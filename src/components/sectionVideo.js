import videoImg from "../img/carouselItem2.jpg";
import playButton from "../img/play-button.png";

function Video() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center hover:brightness-100 brightness-50 my-10"
        style={{ backgroundImage: `url(${videoImg})` }}
      >
        <div className="flex justify-center items-center h-screen">
          <div className="">
            <img
              src={playButton}
              className="h-12 lg:h-20 brightness-100"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
