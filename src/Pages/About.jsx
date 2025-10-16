import { Link } from "react-router";
import van from "../assets/image 54.png";
import MyContainer from "../MyContainer/MyContainer";

const About = () => {
  return (
    <div className={"bg-[#fff7ed]"}>
      <div className="w-full">
        <img className=" w-full object-contain" src={van} alt="" />
      </div>

      <MyContainer>
        <div className="py-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-5 text-[#161616]">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-base md:text-xl font-semibold mb-5 text-[#161616]">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are certified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="text-base md:text-xl font-semibold  mb-5 text-[#161616]">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-[#ffcc8d] rounded-2xl  my-6 p-10">
          <h1 className="text-2xl/loose   font-bold text-[#161616] ">
            Your destination is waiting. Your van is ready
          </h1>
          <Link
            to={"/vans"}
            className="mt-2 font-bold btn btn-neutral rounded-2xl"
          >
            Explore our van
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

export default About;
