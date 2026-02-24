import { useLocation, useParams } from "react-router";
import ImageGallary from "./ImageGallary";

const SingleDisease = () => {
const {diseaseId}=useParams();
const location = useLocation();
const disease=location.state;
console.log(disease);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center my-5">
        <div className="w-72 h-60 md:w-96 md:h-80 lg:w-md lg:h-96">
          <ImageGallary images={disease.images}/>
        </div>
        <div className=" w-72 md:w-1/2 h-96 p-1 md:p-3">
          <div>
            <h1 className="text-3xl font-semibold">{disease.name}</h1>
            <p className="text-green-800">{disease.scientificName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleDisease;