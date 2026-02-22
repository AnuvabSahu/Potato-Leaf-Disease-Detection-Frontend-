
import Faq from './Faq';
import Hero from './Hero';
import Industries from './Industries';
import States from './States';
import Stats from './Stats';

const faqList = [
  {
    question: "How accurate is the KrishiNeural AI in detecting potato diseases?",
    answer: "Our neural network is trained on over 50,000+ localized images of Indian potato crops. It currently maintains an accuracy rate of 96% for common diseases like Late Blight and Early Blight."
  },
  {
    question: "Do I need a high-end smartphone to use the scanner?",
    answer: "No. KrishiNeural is designed to be lightweight. Any smartphone with a basic camera and an active internet connection can capture images and receive a diagnosis within seconds."
  },
  {
    question: "Can the AI detect diseases at the early 'invisible' stage?",
    answer: "Yes. The AI identifies micro-patterns and discoloration in leaves that are often missed by the human eye, allowing you to treat the crop before the infection spreads to the whole field."
  },
  {
    question: "Does KrishiNeural suggest specific Indian-brand pesticides?",
    answer: "We provide scientific chemical compositions and biological control methods recommended by ICAR. We also suggest localized treatment plans based on what is commonly available in Indian mandis."
  },
  {
    question: "Is the platform available in regional languages like Hindi or Bengali?",
    answer: "Absolutely. We support Hindi, Bengali, Punjabi, and Gujarati to ensure that every 'Kisan' can access world-class technology in their native language."
  },
  {
    question: "How does this help me sell my potatoes to large companies like Lay's or McCain?",
    answer: "Major processing brands require 'Export Quality' disease-free tubers. Using KrishiNeural ensures your crop meets their strict health standards, helping you secure better contracts and higher prices."
  }
];



const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <h2 className='text-3xl font-semibold text-center my-10 '>Indian States With Highest Production</h2>
            <States />
            <h2 className='text-3xl font-semibold text-center my-10 '>Industries based in Potato Production</h2>
            <Industries/>
            <div className='flex flex-col items-center justify-center '>
                <h2 className='text-3xl font-semibold text-center my-10 '>Common FAQs</h2>
                <Faq faqList={faqList}/>
            </div>
            
        </div>

    );
}

export default Home;
