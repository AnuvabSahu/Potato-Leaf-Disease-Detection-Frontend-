import { useParams } from "react-router";

const SingleDisease = () => {
const {diseaseId}=useParams();
  return (
    <div>
      SingleDisease - {diseaseId}

    </div>
  )
}

export default SingleDisease;