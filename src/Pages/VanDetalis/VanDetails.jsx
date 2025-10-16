import { Link, useLoaderData, useParams } from "react-router";

const VanDetails = () => {
  const { id } = useParams();
  const convertId = Number(id);
  const vanData = useLoaderData();
  const singleVan = vanData.find((van) => van.id == convertId);
  const { name, price, description, imageUrl, type } = singleVan;

  return (
    <div>
      <Link to={"/vans"} className="font-bold underline">
        Back to all vans
      </Link>
      <div>
        <h1>{name}</h1>
        <img src={imageUrl} alt="" />
        <p>{description}</p>
        <p>{price}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default VanDetails;
