import React, { useEffect, useState } from "react";
import axios from "axios";
import Owl from "./home-components/Sliders/Owl"
import SkeletonLoader from "./home-components/Sliders/SkeletonLoader";

const HotCollections = () => {
  const [nfts, setNfts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  async function getNFTs(){
    const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`)
    setNfts(data)
    setIsLoaded(true)
  }

  useEffect(() => {
    getNFTs()
  },[isLoaded])


  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {
            !isLoaded ? (
              <SkeletonLoader/>
            ) : (
              <Owl nfts = {nfts}/>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
