import axios from "axios";
import { useState } from "react";
import Loading from "./Loading"

const Detection = () => {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }
    setResult(null)
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }

    const formData = new FormData();
    formData.append("file", file);  // IMPORTANT: key must match backend

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/predict/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };





  return (
    <div className="flex flex-col gap-4 ">
      <div className="p-3 my-4">
        <h1 className="text-lg text-center sm:text-2xl md:text-4xl font-semibold">Upload an image. Let AI do the thinking.</h1>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center md:flex-row gap-3">
          <input type="file" className="file-input file-input-primary" onChange={handleFileChange} />
          <button className="btn btn-outline btn-primary w-28" onClick={handleUpload} disabled={!file}>Detect</button>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-md text-center sm:text-xl md:text-2xl font-semibold">-- Analysis --</h1>
          {
            (!preview && result == null) ?
              <h3>Upload image and click 'Detect'</h3>
              :
              <div className="flex flex-col items-center md:flex-row gap-4 justify-between md:w-3xl lg:w-4xl md:h-80">
                <div className="w-52 md:w-1/3 md:h-full">
                  {preview && (
                    <img
                      src={preview}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-xl border"
                    />
                  )}
                </div>
                <div className="bg-secondary-content rounded-xl w-2/3 h-full">
                  {!result ? <Loading /> : (
                    <div className="p-3 overflow-y-auto h-full">
                      <div className="my-2">
                        <h2 className="text-xl font-semibold ">{result.name}</h2>
                        <p className="text-md text-primary">With {(result.confidance * 100).toFixed(2)}% confidance</p>
                      </div>
                      {
                        result.name == "Healthy" ?
                          <>
                            <h3 className="text-lg font-semibold">Congrats ! Your crop is healthy</h3>
                          </>
                          :
                          <>
                            <div className="mb-2">
                              <span className="font-semibold">Cause : </span> <span>{result.causeType}</span>
                            </div>
                            <div className="mb-2">
                              <span className="font-semibold">Spread Method : </span>
                              {result?.spreadMethod?.map((item, index) => (
                                <span key={index} className="mx-1">{item},{" "}</span>
                              ))}
                            </div>
                            <div className="mb-2">
                              <h3 className="font-semibold">Treatment : </h3>
                              <ul className="list-disc pl-5">
                                {result?.treatment?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mb-2">
                              <h3 className="font-semibold">Organic Control : </h3>
                              <ul className="list-disc pl-5">
                                {result?.organicControl?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mb-2">
                              <h3 className="font-semibold">Chemical Control : </h3>
                              <ul className="list-disc pl-5">
                                {result?.chemicalControl?.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mb-2">
                              <span className="font-semibold">Confusable With : </span>
                              {result?.confusableWith?.map((item, index) => (
                                <span key={index} className="mx-1">{item},{" "}</span>
                              ))}
                            </div>
                          </>
                      }
                    </div>
                  )}
                </div>
              </div>
          }
        </div>
      </div>

    </div>
  );
}


export default Detection;


// name:str
// scientificName:str
// causeType:str
// spreadMethod:List[str]
// treatment:List[str]
// organicControl:List[str]
// chemicalControl:List[str]
// confusableWith:List[str]
// confidance:str