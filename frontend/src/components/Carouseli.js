import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carouseli = () => {
    return (
      <div>
        <Carousel>
         <Carousel.Item interval={1000}>
           <img
           className="d-block w-100 align-center"
           src="https://ansunibaate.com/wp-content/uploads/2019/07/sai-baba-best-hd-image-download.jpg"
           alt="First slide"
           height="350"
          />
        <Carousel.Caption>
         <h3>SAI BABA</h3>
         <p>"My Lovely God"</p>
        </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={500}>
         <img
         className="d-block w-100 h-20  align-center"
         src="https://wallpapers.iskcondesiretree.com/wp-content/wallpapers/iskcon_chennai/001-Sri_Sri_Radha_Krishna_Close_up_-_1920x1080.jpg"
         alt="Second slide"
         height="350"
          />
         <Carousel.Caption>
        <h3>RADHA KRISHNA</h3>
        <p>"Best Pair In The World"</p>
        </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item>
           <img
            className="d-block  w-100 h-20  align-center"
            src="https://wallpapercave.com/wp/wp4051925.jpg"
            alt="Third slide"
            height="350"
             />
        <Carousel.Caption>
        <h3>SIVA PARVATHI</h3>
          <p>“Daughter of the Mountain”</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>
</div>
    )
}

export default Carouseli
