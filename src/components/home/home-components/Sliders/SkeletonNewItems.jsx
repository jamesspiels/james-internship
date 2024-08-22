import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonNewItems = () => {
    const options = {
        items:4,
        loop:true,
        margin:12,
        nav:true,
        dots:false,
        responsive: {
            0: {
                items:1
            },
            480:{
                items:2
            }, 
            900:{
                items:3
            },
            1200:{
                items:4
            }

        }
    }
    return ( 
        <OwlCarousel className='owl-theme' {...options}>
            <div className="nft__item">
                <div className="author_list_pp">
                    <Skeleton circle width={60} height={60}/>
                    <i className="fa fa-check"></i>
                
                </div>
                <div className="de_countdown">
                    <Skeleton width={90}/>
                </div>

                <div className="nft__item_wrap nft_skeleton_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Skeleton width = "100%" height={280} containerClassName = "flex-1"/>
                </div>
                <div className="nft__item_info">
                    <Skeleton width={90} />
                
                    <div className="nft__item_price nft__skeleton_price">
                        <Skeleton width={60}/>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>
                            <Skeleton width={20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="nft__item">
                <div className="author_list_pp">
                    <Skeleton circle width={60} height={60}/>
                    <i className="fa fa-check"></i>
                
                </div>
                <div className="de_countdown">
                    <Skeleton width={90}/>
                </div>

                <div className="nft__item_wrap nft_skeleton_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Skeleton width = "100%" height={280} containerClassName = "flex-1"/>
                </div>
                <div className="nft__item_info">
                    <Skeleton width={90} />
                
                    <div className="nft__item_price nft__skeleton_price">
                        <Skeleton width={60}/>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>
                            <Skeleton width={20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="nft__item">
                <div className="author_list_pp">
                    <Skeleton circle width={60} height={60}/>
                    <i className="fa fa-check"></i>
                
                </div>
                <div className="de_countdown">
                    <Skeleton width={90}/>
                </div>

                <div className="nft__item_wrap nft_skeleton_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Skeleton width = "100%" height={280} containerClassName = "flex-1"/>
                </div>
                <div className="nft__item_info">
                    <Skeleton width={90} />
                
                    <div className="nft__item_price nft__skeleton_price">
                        <Skeleton width={60}/>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>
                            <Skeleton width={20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="nft__item">
                <div className="author_list_pp">
                    <Skeleton circle width={60} height={60}/>
                    <i className="fa fa-check"></i>
                
                </div>
                <div className="de_countdown">
                    <Skeleton width={90}/>
                </div>

                <div className="nft__item_wrap nft_skeleton_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Skeleton width = "100%" height={280} containerClassName = "flex-1"/>
                </div>
                <div className="nft__item_info">
                    <Skeleton width={90} />
                
                    <div className="nft__item_price nft__skeleton_price">
                        <Skeleton width={60}/>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>
                            <Skeleton width={20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="nft__item">
                <div className="author_list_pp">
                    <Skeleton circle width={60} height={60}/>
                    <i className="fa fa-check"></i>
                
                </div>
                <div className="de_countdown">
                    <Skeleton width={90}/>
                </div>

                <div className="nft__item_wrap nft_skeleton_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Skeleton width = "100%" height={280} containerClassName = "flex-1"/>
                </div>
                <div className="nft__item_info">
                    <Skeleton width={90} />
                
                    <div className="nft__item_price nft__skeleton_price">
                        <Skeleton width={60}/>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>
                            <Skeleton width={20} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="nft__item">
                <div className="author_list_pp">
                    <Skeleton circle width={60} height={60}/>
                    <i className="fa fa-check"></i>
                
                </div>
                <div className="de_countdown">
                    <Skeleton width={90}/>
                </div>

                <div className="nft__item_wrap nft_skeleton_wrap">
                    <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Skeleton width = "100%" height={280} containerClassName = "flex-1"/>
                </div>
                <div className="nft__item_info">
                    <Skeleton width={90} />
                
                    <div className="nft__item_price nft__skeleton_price">
                        <Skeleton width={60}/>
                    </div>
                    <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>
                            <Skeleton width={20} />
                        </span>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
}
 
export default SkeletonNewItems;