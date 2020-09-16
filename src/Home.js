import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <div className="homeContainer">
               <img className="homeImage" src ="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" />
            </div> 
            <div className="homeRow">
                {/*product*/}
                <Product  title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black)" price={12999} image="https://m.media-amazon.com/images/I/71sBGR6LZhL._AC_UY218_.jpg" 
                rating={5}/>
                <Product  title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android " price={12999} image="https://m.media-amazon.com/images/I/817gj7pfUzL._AC_UY218_.jpg" 
                rating={5}/>
            </div>
            <div className="homeRow">
                {/*product*/}
                <Product title="Realme Buds 2.0" price={599} image="https://m.media-amazon.com/images/I/51F5+NiGOxL._AC_UY218_.jpg" 
                rating={5} />
                {/*product*/}
                <Product title="Mi Sports Bluetooth Earphones Basic Dynamic bass" price={1,299} image="https://m.media-amazon.com/images/I/61X5Gw9zI-L._AC_UY218_.jpg" 
                rating={4}/>
                {/*product*/}
                <Product  title="Realme Band" price={1299} image="https://m.media-amazon.com/images/I/61n-IAVPCeL._AC_UL320_.jpg" 
                rating={4}/>
                {/*product*/}
                <Product title="Mi Band" price={2299} image="https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_UL320_.jpg" 
                rating={4} />
                {/*product*/}
                <Product title="Oneplus Bullet Wireless In Ear" price={1999} image="https://m.media-amazon.com/images/I/616bhfyXimL._AC_UL320_.jpg" 
                rating={5}/>
            </div>
            <div className="homeRow">
                {/*product*/}
                <Product title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop
" price={43999} image="https://m.media-amazon.com/images/I/71mYRzElTAL._AC_UY218_.jpg" 
                rating={4}/>
                 <Product  title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black)" price={12999} image="https://m.media-amazon.com/images/I/71sBGR6LZhL._AC_UY218_.jpg" 
                rating={5}/>
                 <Product  title="ASUS TUF Gaming FX505DT 15.6 FHD 120Hz Laptop GTX 1650 4GB Graphics (Ryzen 5-3550H/8GB RAM/512GB PCIe SSD/Windows 10/Stealth Black/2.20 Kg), FX505DT-AL106T
a" price={60990} image="https://m.media-amazon.com/images/I/815K4p82zlL._AC_UY218_.jpg" 
                rating={4}/>
            </div>
        </div>
    )
}

export default Home
