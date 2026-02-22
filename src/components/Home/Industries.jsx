
import Gallery from './Gallery';


const industries = [
    {
        title: "The Snack & Fast Food Industry",
        description: "This is the most visible sector. India has seen a 'seismic shift' in potato usage, moving from fresh consumption to processed snacks.",
        subIndustries: [
            {
                title: "Potato Chips & Namkeen",
                description: "Giants like PepsiCo (Lays), Haldiram’s, and Balaji Wafers consume millions of tonnes of processing-grade potatoes (like the Chipsona variety).",
            },
            {
                title: "Frozen French Fries",
                description: "This is the fastest-growing segment in 2025-26. India has recently disrupted the global market, with exports of frozen fries surging by over 450%.",
            },
            {
                title: "Quick Service Restaurants",
                description: "Chains like McDonald's, Burger King, and KFC rely on consistent Indian harvests for fries, hash browns, and burger patties.",
            },
        ],
        images: [
            "https://media.istockphoto.com/id/538355715/photo/different-type-of-lays-potato-chips-in-nepal.jpg?s=612x612&w=0&k=20&c=-8oWorv2RNtOSws5idYRqbjK_YAqLA3rP33b4asBcYc=",
            "https://media.istockphoto.com/id/615280878/photo/avocado-bacon-cheeseburger-with-a-basket-of-fries.jpg?s=612x612&w=0&k=20&c=hBbqYWrrF3UBXYF7htCJ8X96X92s9JzIz2QDUZv47NA=",
            "https://media.istockphoto.com/id/1426270938/photo/potato-wafer-aloo-chips.jpg?s=612x612&w=0&k=20&c=fc9QFEu1YMEZtch5dOVLPJuzLcJ8ePzA_eUjBEwC_cY=",
            "https://media.istockphoto.com/id/1280571151/photo/mint-flavored-potato-chips.jpg?s=612x612&w=0&k=20&c=5t0e41YVC22zV-7rLViJrWInyt-WCfAjyFaktQuAt0o=",
            "https://media.istockphoto.com/id/496094410/photo/potatoes-fries-in-a-red-carton-box-isolated-fast-food.jpg?s=612x612&w=0&k=20&c=d7WnO6AW0C3A-xMSBa3Yb5rmSNelyY-jmxhW2efZq2Q=",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuXs1HK0HJ3ykNJdf75ly_4Uy4N2q9CA4fg&s",


        ]
    },
    {
        title: "The Industrial Starch Industry",
        description: "Potatoes are a 'starch powerhouse' When potatoes aren't 'pretty' enough for the supermarket, they go here.",
        subIndustries: [
            {
                title: "Textiles & Paper",
                description: "Potato starch is used as a sizing agent to strengthen cotton yarn and improve the surface of high-quality paper.",
            },
            {
                title: "Adhesives",
                description: "It acts as a natural, biodegradable base for glues and binders.",
            },
            {
                title: "Bioplastics",
                description: "In line with India's 2026 sustainability goals, potato starch is being used to create 100% biodegradable plates, spoons, and packaging films.",
            },
        ],
        images: [
            "https://media.istockphoto.com/id/2159954502/photo/fresh-raw-sweet-potato-falling-in-the-air-isolated.jpg?s=612x612&w=0&k=20&c=yeaIAV0sk_RpP-AtVaQxqMb4m1pQrPw9dmqpu66oMmw=",
            "https://media.istockphoto.com/id/536112709/photo/potato-peel.jpg?s=612x612&w=0&k=20&c=9BxURMpYahZDcvl_jfcuW72dlrMJKfdQm7M7F2F9_AE=",
            "https://media.istockphoto.com/id/2081303627/photo/elegant-mens-suit-fabric-swatches.jpg?s=612x612&w=0&k=20&c=qZjDRllGhRRgxzMIsyl3vbHbjELjPStkcMXSfF85NCQ=",

        ]
    },
    {
        title: "Cold Storage & Logistics Infrastructure",
        description: "This is a massive service industry that wouldn't exist without the potato.",
        subIndustries: [
            {
                title: "Storage Hubs",
                description: "Unlike other vegetables, potatoes must be stored for 6–10 months. This has led to a massive network of over 8,000 cold storage units across India, primarily in the 'Potato Belt' (UP, West Bengal, Bihar).",
            },
            {
                title: "Specialized Logistics",
                description: "2026 has seen a rise in 'Export-Ready' logistics, including temperature-controlled containers used to ship potatoes to Saudi Arabia, the UAE, and Southeast Asia.",
            },
        ],
        images: [
            "https://media.istockphoto.com/id/939061316/photo/fresh-cleaned-and-sorted-potatoes-on-a-conveyor-belt.jpg?s=612x612&w=0&k=20&c=CIp5fUJIcnMD2wROu7sbBwGD3VmeU6i1fPJWek-llDQ=",
            "https://media.istockphoto.com/id/1153060922/photo/fresh-fruits-and-vegetables-in-warehouse.jpg?s=612x612&w=0&k=20&c=acBZxZWFFQ41TJH2AiNMFkOMuMwnWf4nDz03TihQJSE=",
            "https://media.istockphoto.com/id/472072719/photo/colorful-painted-truck-in-india.jpg?s=612x612&w=0&k=20&c=E4Ozy9vvMvbaVyhgB0lpwl5pLTvhh1RW5Y_96vsYK1Y=",
            "https://media.istockphoto.com/id/157682557/photo/millions-of-potatoes-in-storage.jpg?s=612x612&w=0&k=20&c=lTjrrBpvuR1ttn9AlHFLPYrL0_4yndIdyrmi06W_Nc0=",
            "https://media.istockphoto.com/id/924838638/photo/worker-on-a-truck-with-vegetables.jpg?s=612x612&w=0&k=20&c=kFqKQWU2r97BLFFo5Kmo5ADvCOVebz8AII72Oac829A=",
        ]
    },
    {
        title: "The Pharmaceutical & Cosmetic Industry",
        description: "These brands use potato derivatives for medicine binders and skincare.",
        subIndustries: [
            {
                title: "Tablet Binding",
                description: "Potato starch is a preferred 'filler' or binder in the production of medical tablets because it is chemically inert and easy to digest.",
            },
            {
                title: "Skincare",
                description: "Extracts from potatoes are increasingly used in Indian cosmetic brands for skin-lightening and anti-inflammatory creams (targeting blemishes and dark circles).",
            },
        ],
        images: [
            "https://media.istockphoto.com/id/1094361054/photo/beauty-swatches.jpg?s=612x612&w=0&k=20&c=Keu_qAppa2q46BjiwJ0JDe10-K-DlaCdOo-JUHfc7CY=",
            "https://media.istockphoto.com/id/2170497012/photo/portrait-of-a-beautiful-woman-with-natural-make-up.jpg?s=612x612&w=0&k=20&c=D6DGn8nIR91qUCHpp8yOUrplf4PMLgQOcx8SVYfxplg=",
            "https://media.istockphoto.com/id/1405998929/photo/casual-make-up-products-spills-and-smears-of-makeup-foundation-eyeshadow-face-powder-and.jpg?s=612x612&w=0&k=20&c=crRkRHOfzDgWUAHo9m8rOIK14VIgpM-DFN2PqAmB0eY=",
            "https://media.istockphoto.com/id/157676290/photo/pills-background.jpg?s=612x612&w=0&k=20&c=LgfJQQCzrvZ4E54iBmI0fSV_vwBQP5y7Wp621Ur4-O8=",
        ]
    },

];

const Industries = () => {
    return (
        <div className='mx-10 flex flex-col gap-10'>
            {
                industries.map((item, index) => (
                    <div className='flex flex-col gap-5 lg:gap-0 items-center lg:flex-row lg:justify-between' key={index}>
                        <div className='w-7/12'>
                            <h2 className='text-2xl font-semibold text-center '>{item.title}</h2>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra ">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Industry</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* rows*/}
                                        {item.subIndustries.map((subIndustries, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td className='text-lg'>{subIndustries.title}</td>
                                                <td>{subIndustries.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Gallery images={item.images} />
                    </div>
                ))
            }


        </div>
    )
}

export default Industries