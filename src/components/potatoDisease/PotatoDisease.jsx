
import { FaSearch } from "react-icons/fa";

const diseaseList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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
                    diseaseList.map((item, index) => (
                        <div className="card bg-base-100 w-64 md:w-72 shadow-sm" key={index}>
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}


export default PotatoDisease;