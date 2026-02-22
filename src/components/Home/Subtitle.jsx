
const subtitleList = [
    "India’s smartest AI assistant for potato farmers is here to help you identify and treat diseases accurately.",
    "Don't let blight or pests destroy your hard work. Use KrishiNeural AI and find treatment of your crop's disease.",
    "Instant potato disease identification and expert-backed treatment suggestions powered by KrishiNeural AI.",

];
const Subtitle = () => {


return (
    <div className="text-rotate mb-3 text-gray-400 text-center">
        <span>
            <span className="text-wrap lg:text-nowrap">{subtitleList[0]}</span>
            <span className="text-wrap lg:text-nowrap">{subtitleList[1]}</span>
            <span className="text-wrap lg:text-nowrap">{subtitleList[2]}</span>
        </span>
    </div>
);
}


export default Subtitle;