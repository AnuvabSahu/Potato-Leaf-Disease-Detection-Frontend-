
import Subtitle from './Subtitle';
import Carousal from './Carousal';

const heroImageList = [
    "https://images.pexels.com/photos/9798974/pexels-photo-9798974.jpeg",
    "https://images.pexels.com/photos/7415330/pexels-photo-7415330.jpeg",
    "https://images.pexels.com/photos/12008052/pexels-photo-12008052.jpeg",
    "https://images.pexels.com/photos/13061061/pexels-photo-13061061.jpeg",
    "https://images.pexels.com/photos/9912131/pexels-photo-9912131.jpeg",
    "https://images.pexels.com/photos/10854385/pexels-photo-10854385.jpeg",
    "https://images.pexels.com/photos/13061059/pexels-photo-13061059.jpeg",
    "https://images.pexels.com/photos/1098423/pexels-photo-1098423.jpeg",
    "https://images.pexels.com/photos/1733192/pexels-photo-1733192.jpeg",
]

const Hero = () => {
    return (
        <div className='flex flex-col '>
            <div className='h-80 flex flex-col justify-center items-center gap-2'>
                <div className='text-center '>
                    <div className='text-3xl md:text-5xl font-semibold my-1 flex flex-col md:flex-row md:gap-2'>
                         <h2 >Smart Detection,</h2>
                         <h2>Healthy Tubers.</h2>
                    </div>
                   
                    <Subtitle />
                </div>

                <div className='flex flex-col lg:flex-row gap-3'>
                    <button className='btn btn-primary w-40'>Start Scanning</button>
                    <button className='btn btn-ghost underline w-40'>View Diseases</button>
                </div>
            </div>
            <Carousal images={heroImageList} />
        </div>
    )
}

export default Hero