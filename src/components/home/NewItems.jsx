import React, { useEffect, useState } from "react";
import axios from "axios";
import NewItemsSlider from "./home-components/Sliders/NewItemsSlider";
import SkeletonNewItems from "./home-components/Sliders/SkeletonNewItems";


const NewItems = () => {
  const [nfts, setNfts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
 
  async function getNFTs(){
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`)
    setNfts(data)
    setIsLoaded(true)
  }

  useEffect(() => {
    getNFTs()
  },[isLoaded])

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {
            !isLoaded ? (
              <SkeletonNewItems/>
            ) : (
              <NewItemsSlider nfts = {nfts}/>
            )
          }

        </div>
      </div>
    </section>
  );
};

export default NewItems;
