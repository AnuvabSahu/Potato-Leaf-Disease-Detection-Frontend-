const Detection=()=>{
    return(
        <div className="flex flex-col gap-4 ">
            <div className="p-3 my-4">
                <h1 className="text-lg text-center sm:text-2xl md:text-4xl font-semibold">Upload an image. Let AI do the thinking.</h1>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-3">
                    <input type="file" className="file-input file-input-primary" />
                    <button className="btn btn-outline btn-primary">Detect</button>
                </div>
                <div>
                    Analysis
                </div>
            </div>
            
        </div>
    );
}


export default Detection;