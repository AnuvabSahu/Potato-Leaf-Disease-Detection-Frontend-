
import { FaSearch } from "react-icons/fa";
import potatoDiseaseData from "../../images/potatoDisease.json";
import { Link } from "react-router";


const PotatoDisease = () => {
    return (
        <div className="bg-primary-content">
            <div className="flex flex-col justify-center items-center my-8">
                <h1 className="text-2xl md:text-4xl mb-2">Search for Disease</h1>
                <div className="bg-base-100 flex rounded-2xl my-2 w-64 sm:w-96">
                    <input type="text" className="input outline-none border-none md:w-9/12" placeholder="Search" list="diseases" />
                    <datalist id="diseases">
                        <option value="Chrome"></option>
                        <option value="chromium"></option>
                        <option value="Safari"></option>
                        <option value="corona"></option>
                        <option value="Edge"></option>
                    </datalist>
                    <button className="btn btn-primary w-16 md:w-3/12"><FaSearch size={15} /></button>
                </div>
                <div className="flex justify-between gap-2 w-64 sm:w-96 ">
                    <select defaultValue="Pick a color" className="select border-none outline-none">
                        <option disabled={true}>Pick a color</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                    <select defaultValue="Pick a color" className="select not-only:border-none outline-none">
                        <option disabled={true}>Pick a color</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
            </div>
            <div className="divider"></div>
            <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 justify-items-center items-center ">
                {
                    potatoDiseaseData.map((item, index) => (
                        <Link to={"/singleDisease/"+item.id}  key={index} state={item}>
                            <div className="h-96 bg-base-100 w-64 md:w-72 shadow-sm cursor-pointer hover:scale-95 transition-transform duration-200 rounded-3xl">
                                <figure className="w-full h-60 rounded-3xl">
                                    <img
                                        className="w-full h-full object-cover rounded-3xl"
                                        src={item.images[0]}
                                        alt="Disease Image" />
                                </figure>
                                <div className="flex flex-col gap-2 px-3 py-2">
                                    <h2 className="truncate text-xl font-semibold w-full">
                                        {item.name}
                                    </h2>
                                    <p className="truncate">{item.nutshellPoints[0]}</p>
                                    <div className="flex gap-3">
                                        <div className="badge badge-outline">{item.category}</div>
                                        <div className="badge badge-secondary ">{item.commonness}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    );
}


export default PotatoDisease;