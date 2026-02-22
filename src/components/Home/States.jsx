

const statesList = [
    {
        state: "Uttar Pradesh",
        production: "20.13 Million MT",
        rank: "1",
        description: "The 'Potato Hub' of India, contributing nearly 35% of the national harvest.",
        stateImg: "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988="
    },
    {
        state: "West Bengal",
        production: "14.51 Million MT",
        rank: "2",
        description: "Leads in high-quality table varieties.",
        stateImg: "https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY="
    },
    {
        state: "Bihar",
        production: "9.08 Million MT",
        rank: "3",
        description: "A major northern producer where potato is the most widely grown vegetable crop.",
        stateImg: "https://media.istockphoto.com/id/1311389913/photo/litti-chokha-or-liti-choka-from-bihar-jharkhand-and-uttar-pradesh-is-stuffed-with-chana-sattu.jpg?s=612x612&w=0&k=20&c=Z5izhykTpN8sCy5rqwaPjzRWdgv5kNFlganj0vY6T4Q="
    },
    {
        state: "Gujarat",
        production: "4.86 Million MT",
        rank: "4",
        description: "India's processing leader, specializing in varieties for French fries and chips.",
        stateImg: "https://media.istockphoto.com/id/460509305/photo/asiatic-lion-pride.jpg?s=612x612&w=0&k=20&c=u5dbMH-JPsL6iI73MoiG4Nxneb3n2JakC5VBn4OCDJ4="
    }
];


const States = () => {
    return (
        
        <div className="relative gap-2 flex flex-col  lg:flex-row justify-center items-center px-2 ">

            {statesList.map((state, index) => (
                <div className=" cursor-pointer hover:scale-95 transition-transform duration-200" key={index}>
                    <div className="card bg-base-100 image-full w-72 md:w-80 h-52 shadow-sm">
                        <figure className="w-full">
                            <img
                                src={state.stateImg}
                                alt="Shoes" 
                                className="object-cover w-full"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{state.state}</h2>
                            <p className="text-green-300">{state.production}</p>
                            <p className="overflow-hidden">{state.description}</p>
                            <div className="card-actions justify-end">
                                <span className=" bg-green-950 py-2 px-4  font-semibold text-center rounded-2xl"> Rank : {state.rank}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}




        </div>
    )
}

export default States