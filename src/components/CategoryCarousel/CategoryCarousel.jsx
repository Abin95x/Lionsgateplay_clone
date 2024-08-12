import React from 'react'

const CategoryCarousel = ({ categoryName, data }) => {
    return (
        < div className='ml-10'>
         <h1 className='text-white mt-40 text-xl'>Premieres Of Lionsgate Play</h1>

            <div className="carousel carousel-center rounded-box w-full mt-3 bg-transparentspace-x-4 ">
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                        className="rounded-box" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        className="rounded-box" />
                </div>
            </div>
        </div>
    )
}

export default CategoryCarousel