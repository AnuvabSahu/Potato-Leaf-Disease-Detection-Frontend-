import SlideSweeper from "./SlideSweeper";

const indianFarmer = "https://media.istockphoto.com/id/2150142473/photo/an-indian-hardworking-farmer-working-in-field.jpg?s=612x612&w=0&k=20&c=trabD0E0uhRubiBjWVRnszlXth9Pg-OYelP8Bz7Hl8E=";


const cultivationSteps = [
    {
        title: "Soil Preparation",
        subtitle: 'Potato is a "heavy feeder" and a tuber crop, meaning the soil must be loose enough for the potato to expand.',
        subCategory: [
            {
                title: "Ideal Soil Type",
                description: "Well-drained, sandy loam or alluvial soil is best. Avoid heavy clay, as it restricts tuber growth and leads to rot.",
            },
            {
                title: "The pH Factor",
                description: 'Maintain a soil pH between 5.2 and 6.4. Potatoes are sensitive to alkaline soils, which can lead to "Potato Scab" disease.',
            },
            {
                title: "Land Leveling",
                description: 'Use a laser land leveler to ensure uniform water distribution. Deep plow the field (20-25 cm) to break the hard pan, followed by 2-3 harrowings to achieve a fine "tilth" (crumbly texture).',
            },
            {
                title: "Organic Matter:",
                description: "Apply 20-25 tonnes of FYM (Farm Yard Manure) per hectare during the first plowing to improve soil aeration.",
            },
        ],
        videos: [
            "https://www.youtube.com/embed/8oHw55faowY?si=Rz_-5KcPP8Mx-0AW",
            "https://www.youtube.com/embed/LzEIntM23gY?si=GRWHTYSD8ckC1gMd",
            "https://www.youtube.com/embed/8g2LYfzSJHA?si=k1S5fDj3htfm4xzb" ,
            "https://www.youtube.com/embed/Whnt0BkX5Gw?si=wFtkhLQGN59Nrl1D"
        ]
    },
    {
        title: "Seed Selection",
        subtitle: "The quality of your seed accounts for nearly 40% of your total yield.",
        subCategory: [
            {
                title: "Certified Seeds",
                description: "Always use certified, disease-free seed tubers from trusted sources like CPRI (Central Potato Research Institute).",
            },
            {
                title: "Processing (Chips/Fries)",
                description: "Kufri Chipsona-1, Kufri Frysona. High dry matter and low sugar.",
            },
            {
                title: "Table Use",
                description: "Kufri Pukhraj (Early maturity) or Kufri Jyoti.",
            },
            {
                title: "Seed Treatment",
                description: "To prevent soil-borne diseases, treat tubers with Mancozeb (0.3%) for 10 minutes or Boric Acid (3%) for 20 minutes before planting.",
            },
        ],
        videos: [
            "https://www.youtube.com/embed/JcacGR0EU94?si=lEJlGdVvp08UYulf",
            "https://www.youtube.com/embed/31qr_LBVW_c?si=ZwIkd1fG1gKQEiEm",
            "https://www.youtube.com/embed/xEVXYYLk4eM?si=mIBNbe-0f-yUHnpq" ,
            "https://www.youtube.com/embed/gv47q1GdwRM?si=JIb5LLJ0h2fEJEms"
        ]
    }, {
        title: "Planting Method",
        subtitle: "Proper spacing ensures each plant gets enough sunlight and nutrients without competition.",
        subCategory: [
            {
                title: "Standard Spacing",
                description: "Maintain a 60 cm row-to-row distance and 20 cm plant-to-plant distance.",
            },
            {
                title: "Planting Depth",
                description: "Place tubers 7–10 cm deep. If planted too shallow, the growing tubers will be exposed to sunlight, turn green (producing toxic Solanine), and lose market value.",
            },
            {
                title: "Earthing-up",
                description: 'After 25-30 days, when plants are 15-20 cm tall, pull soil around the base of the plants to form ridges. This provides more room for tubers and prevents "Potato Tuber Moth" attacks.',
            },
        ],
        videos: [
            "https://www.youtube.com/embed/BV6-PsToR6w?si=SnofIpKckSNCu8gj" ,
            "https://www.youtube.com/embed/ianApRDflh0?si=tLeVJIS-5cPBi7hZ",
            "https://www.youtube.com/embed/Ys3gQhDGq7g?si=txJYqeAm0m9R-43q",
            "https://www.youtube.com/embed/malBRMlUM4A?si=JImBV0oACZfhEL_U"
        ]
    }, {
        title: "Irrigation Method",
        subtitle: "Potatoes are highly sensitive to water stress. Both over-irrigation and under-irrigation are harmful.",
        subCategory: [
            {
                title: "Critical Stages",
                description: "The most vital times for water are Tuber Initiation (20-25 days after planting) and Tuber Bulking (45-70 days after planting).",
            },
            {
                title: "Modern Technique",
                description: " Drip Irrigation is highly recommended as it reduces water use by 30% and prevents the spread of water-borne fungal spores.",
            },
            {
                title: "The 'Stop' Rule",
                description: "ease all irrigation 10-12 days before harvest. This allows the potato skin to thicken (suberization), which is essential for a long shelf-life.",
            },
        ],
        videos: [
            "https://www.youtube.com/embed/EVfH-Sg_kx0?si=4jscp-6AcX8P6wtn",
            "https://www.youtube.com/embed/XaLA3Nc0WJo?si=Ri_1Jffu6H5jtX6E",
            "https://www.youtube.com/embed/ttGTTdmBhag?si=WIl7sqG-sqjMmPVA",
            "https://www.youtube.com/embed/Vof1GmL2DAQ?si=0x6_EL7OAQtMQUpU" 
        ]
    }, {
        title: "Use KrishiNeural to Detect",
        subtitle: "This is where technology meets the field. Regular monitoring can save your entire investment.",
        subCategory: [
            {
                title: "Late Blight Detection",
                description: "Our AI identifies water-soaked lesions on leaf tips. If detected early, you can apply systemic fungicides before the 'Late Blight' destroys the crop in 48 hours.",
            },
            {
                title: "Early Blight",
                description: "Identify concentric 'target-board' rings on older leaves.",
            },
            {
                title: "Virus Patterns",
                description: "Detect Potato Leafroll Virus (PLRV) which causes leaves to curl upwards and become brittle.",
            },
            {
                title: "Actionable Advice",
                description: "Once you scan, KrishiNeural provides a localized chemical or biological solution (e.g., dosage of Metalaxyl or Mancozeb) based on the severity.",
            },
        ],
        videos: [
            "https://www.youtube.com/embed/9jo51nJrO0k?si=66mPTiWqGQQFz6H5"
        ]
    }, {
        title: "Fertilizer and Nutrient Management",
        subtitle: "A balanced N-P-K (Nitrogen, Phosphorus, Potassium) ratio is the secret to large, healthy tubers.",
        subCategory: [
            {
                title: "General Dosage:",
                description: "For one hectare, a standard recommendation is 150:80:120 kg (N:P:K).",
            },
            {
                title: "Application Timing (Basal Dose)",
                description: "All Phosphorus, all Potassium, and 50% of Nitrogen should be applied at the time of planting.",
            },
            {
                title: "Application Timing (Top Dressing)",
                description: "Apply the remaining 50% of Nitrogen (Urea) during the 'Earthing-up' process.",
            },
            {
                title: "Micronutrients",
                description: "Zinc and Boron are crucial. If soil is deficient, apply 25 kg Zinc Sulphate per hectare to prevent stunted growth.",
            },
        ],
        videos: [
            "https://www.youtube.com/embed/TkU-vgREb7g?si=nn_tfEseCP1ajV8r",
            "https://www.youtube.com/embed/gVHKYDVAK7o?si=-gZMDRXp71kHEUEA" ,
            "https://www.youtube.com/embed/dZbIN-OnoWc?si=WepOjjnI-qWpUAsp",
            "https://www.youtube.com/embed/F05Q9id422A?si=3T43UcGnXK8UJJjS"
        ]
    }, {
        title: "Harvesting and Storage",
        subtitle: "The final step determines your profit in the Mandi.",
        subCategory: [
            {
                title: "Dehaulming",
                description: "Cut the green vines (haulms) 10 days before the actual harvest. This stops tuber growth and 'cures' the skin, making it tough enough to handle transport.",
            },
            {
                title: "Harvesting",
                description: "Use a potato digger or manual labor. Ensure tubers are not bruised or cut by tools.",
            },
            {
                title: "Curing",
                description: "Keep tubers in a heap in a cool, shaded place for 10-15 days. This heals any minor skin damage.",
            },
            {
                title: "Storage",
                description: "Store at 4°C - 5°C in cold storage.",
            },
            {
                title: "Processing Potatoes",
                description: "Store at 10°C to prevent the starch from turning into sugar (which causes chips to turn black when fried).",
            },
        ],
        videos: [
            "https://www.youtube.com/embed/j_AtKRLj4c4?si=dR6U2RYBmthpy5OY" ,
            "https://www.youtube.com/embed/DbZe5M_qJrU?si=a35O1VcltFgc6imS",
            "https://www.youtube.com/embed/oDxPkaRvfSA?si=cC2VF1QYOKolMRmj" ,
            "https://www.youtube.com/embed/gFB2ssY4YH0?si=ruCrChlmMtgcO2v8"
        ]
    },
];



const Caltivation = () => {
    return (
        <div className="">
            <div className="relative w-full h-72 ">
                <div className="w-full h-full">
                    <img src={indianFarmer} alt="Not loaded" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 w-full h-full bg-primary-content/75 flex flex-col justify-center items-center">
                    <h2 className="text-xl text-center sm:text-2xl md:text-4xl font-semibold">Master the Science of Potato Farming</h2>
                    <p className="text-slate-300 text-center text-sm md:text-md">From seed selection to export-ready harvest - optimized by KrishiNeural AI.</p>
                </div>
            </div>
            <div className="my-5 px-8 flex flex-col gap-4">
                {
                    cultivationSteps.map((item, index) => (
                        <div className="mt-4" key={index} id={item.title.split(" ")[0]}>
                            <h3 className=" text-2xl font-semibold">{(index + 1) + ". " + item.title}</h3>
                            <p className="px-2">{item.subtitle}</p>
                            <div className="flex flex-col lg:flex-row gap-3 items-center justify-center lg:items-start lg:justify-between p-3 my-3">
                                <div className="overflow-x-auto ">
                                    <table className="table md:w-xl lg:w-2xl">
                                        <tbody>
                                            {item.subCategory.map((item, index) => (
                                                <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td>{item.title}</td>
                                                    <td>{item.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="w-72 h-60 md:h-80 md:w-lg lg:w-lg">
                                    <SlideSweeper videos={item.videos} />
                                </div>
                            </div>


                        </div>
                    ))
                }

            </div>
            <div className="fab">
                {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
                <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-info">#</div>

                {/* close button should not be focusable so it can close the FAB when clicked. It's just a visual placeholder */}
                <div className="fab-close">
                    Close <span className="btn btn-circle btn-lg btn-error">✕</span>
                </div>

                {/* buttons that show up when FAB is open */}
                {
                    cultivationSteps.toReversed().map((item, index) => (
                         <a key={index} href={"#"+item.title.split(" ")[0]} className="btn font-medium text-sm">{item.title} </a>
                    ))
                }
            </div>
        </div>
    );
}


export default Caltivation;