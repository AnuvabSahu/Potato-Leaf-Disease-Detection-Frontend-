import { useLocation, useParams } from "react-router";
import ImageGallary from "./ImageGallary";
import Nutshell from "./Nutshell";

const SingleDisease = () => {
  const { diseaseId } = useParams();
  const location = useLocation();
  const disease = location.state;
  console.log(disease);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center my-5">
        <div className="w-72 h-60 md:w-96 md:h-80 lg:w-md lg:h-96">
          <ImageGallary images={disease.images} />
        </div>
        <div className=" w-72 md:w-1/2 h-96 p-1 md:p-3">
          <div className="flex flex-col gap-3 ">
            <div >
              <h1 className="text-3xl font-semibold">{disease.name}</h1>
              <p className="text-green-800 ">{disease.scientificName}</p>
            </div>
            <div className="flex gap-3">
              <div className="badge badge-outline badge-error">{disease.category}</div>
              <div className="badge badge-outline badge-info">{disease.commonness}</div>
            </div>

            <span className="flex gap-2">
              Affected Part :
              {
                disease?.affectedPart?.map((item, index) => (
                  <div key={index} className="badge badge-soft badge-accent">{item}</div>
                ))
              }
            </span>
            <span className="flex gap-2">
              Confusable With :
              {
                disease?.confusableWith?.map((item, index) => (
                  <div key={index} className="badge badge-soft badge-primary">{item}</div>
                ))
              }
            </span>
            <div className="flex gap-2 w-3xl overflow-x-scroll">
              {
                disease.nutshellPoints.map((point,index)=>(
                  <Nutshell key={index} point={point}/>
                ))
              }

            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default SingleDisease;