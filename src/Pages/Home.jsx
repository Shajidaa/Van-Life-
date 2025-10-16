import { Link } from "react-router";
import MyContainer from "../MyContainer/MyContainer";
const Home = () => {
  return (
    <div
      className="hero min-h-dvh "
      style={{
        backgroundImage: "url(https://i.ibb.co.com/3mMny9SF/hero.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <MyContainer className=" p-10 text-neutral-content text-start">
        <div className="">
          <h1 className="mb-5 md:text-6xl text-3xl  font-extrabold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="mb-5 text-xl font-semibold">
            Add adventure to your life by joining the #vanlife movement. Rent
            the // perfect van to make your perfect road trip.
          </p>
          <Link
            to="/vans"
            className="btn w-full border-none bg-[#FF8C38] text-white"
          >
            Fin your van
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default Home;
