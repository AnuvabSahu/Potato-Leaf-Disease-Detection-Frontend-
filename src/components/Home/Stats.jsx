
import { FaGlobeAmericas, FaRupeeSign, FaRocket, FaCalendarAlt } from "react-icons/fa";
import { FaTractor } from "react-icons/fa6";

const statsList = [
    {
        title: "Total Production",
        value: "58.1M",
        description: "India's annual harvest (in tonnes).",
        icon: <FaTractor size={20}/>
    },
    {
        title: "Global Ranking",
        value: "World #2",
        description: "Second only to China globally.",
        icon: <FaGlobeAmericas size={20}/>
    },
    {
        title: "Export Revenue",
        value: "₹22.2B",
        description: "Annual earnings from global markets.",
        icon: <FaRupeeSign size={20}/>
    },
    {
        title: "Processing Growth",
        value: "450% ",
        description: "Massive surge in frozen-fry exports.",
        icon: <FaRocket size={20} />
    },
];


const Stats = () => {
    return (

        <div className="flex justify-center">
            <div className="stats shadow stats-vertical md:stats-horizontal my-6">
                {
                    statsList.map((item, index) => (
                        <div className="stat" key={index}>
                            <div className="stat-figure text-primary">
                                {item.icon}
                            </div>
                            <div className="stat-title">{item.title}</div>
                            <div className="stat-value text-primary">{item.value}</div>
                            <div className="stat-desc">{item.description}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Stats