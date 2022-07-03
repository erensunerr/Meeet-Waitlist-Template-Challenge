import UserPhoto2 from './images/User Avatar 2.svg';
import UserPhoto3 from './images/User Avatar 3.svg';
import UserPhoto1 from './images/User Avatar 1.svg';
import {useEffect} from 'react';


// image sizes
// const small = 24;
// const medium = 32;
// const large = 40;

function BackgroundAvatarDistributor({}) {
  // const h = window.innerHeight
  // const w = window.innerWidth
  // var numImages = Math.floor(
  //   (h*w) / (medium*medium) / 80
  // )
  // numImages = numImages > 5 ? 5 :
  //             numImages < 2 ? 2 :
  //             numImages; // max 5 min 2



  return (
    <>
      <div className="">
        <img src={UserPhoto3} alt="" className="fixed left-12 top-24 w-24 "/>
        <img src={UserPhoto2} alt="" className="fixed right-12 top-20 w-32 "/>
        <img src={UserPhoto1} alt="" className="fixed right-4 bottom-16 w-40 "/>
      </div>
      
      <div className="hidden ">
        <img src={UserPhoto3} alt="" className="fixed left-12 top-24 w-24 "/>
        <img src={UserPhoto2} alt="" className="fixed right-12 top-20 w-32 "/>
        <img src={UserPhoto1} alt="" className="fixed right-4 bottom-16 w-40 "/>
      </div>
    </>
  )
}

export default BackgroundAvatarDistributor;
