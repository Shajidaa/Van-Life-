import { Link, useLoaderData } from "react-router";

const Vans = () => {
  const vansData = useLoaderData();
  const vansElements = vansData.map((vans) => (
    <Link
      to={`/vanDetails/${vans.id}`}
      className="border-2 border-gray-600"
      key={vans.id}
    >
      <div className="w-full ">
        <img className="" src={vans.imageUrl} alt="" />
      </div>

      <div className="flex justify-between">
        <h1>{vans.name}</h1>
        <p>
          $ <span>{vans.price} </span>
        </p>
      </div>
      <button>{vans.type}</button>
    </Link>
  ));

  return (
    <div>
      <h1>Explore our van options</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
        {vansElements}
      </div>
    </div>
  );
};

export default Vans;
