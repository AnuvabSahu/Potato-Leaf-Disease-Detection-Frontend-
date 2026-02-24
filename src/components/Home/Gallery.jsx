import React from 'react'

const Gallery = ({ images }) => {
    return (
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 w-64 md:w-96">

            {
                images.map((item, index) => (
                    <div className="carousel-item h-72 w-52" key={index}>
                        <img
                            src={item}
                            className="rounded-box object-cover w-full " />
                    </div>
                ))
            }



        </div>
    )
}

export default Gallery