import React from 'react'
import PageBanner from "../PageBanner";
import ShopDetails from "../page/Shop";


const Shop = () => {
  return (
    <>
     <PageBanner
    title="Shop"
    subtitle="Shop"
    image="https://cdn.pixabay.com/photo/2018/06/09/13/41/czech-republic-3464435_1280.jpg"
    />
    <ShopDetails/>
    </>
  )
}

export default Shop