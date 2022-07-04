
import UserPhoto1 from './images/User Avatar 1.svg';
import UserPhoto2 from './images/User Avatar 2.svg';
import UserPhoto3 from './images/User Avatar 3.svg';
import UserPhoto4 from './images/User Avatar 4.svg';
import UserPhoto5 from './images/User Avatar 5.svg';

import {useEffect} from 'react';


// image sizes
// const small = 24;
// const medium = 32;
// const large = 40;

function BackgroundAvatarDistributor({}) {
  // handles the avatar images in the background
  return (
    <>
      <div className="md:hidden">
        <img src={UserPhoto1} alt="" className="fixed right-[15%] bottom-16 w-40 "/>
        <img src={UserPhoto2} alt="" className="fixed right-[15%] top-20 w-32 "/>
        <img src={UserPhoto3} alt="" className="fixed left-12 top-24 w-24 "/>
      </div>

      <div className="hidden md:block">
        <img src={UserPhoto1} alt="" className="fixed w-40 top-16 right-[25%]"/>
        <img src={UserPhoto2} alt="" className="fixed w-32 top-3/4 right-[20%]"/>
        <img src={UserPhoto3} alt="" className="fixed w-24 top-32 left-16"/>
        <img src={UserPhoto4} alt="" className="fixed w-24 top-[40%] right-[15%]"/>
        <img src={UserPhoto5} alt="" className="fixed w-32 top-2/4 right-[30%]"/>
      </div>

    </>
  )
}

export default BackgroundAvatarDistributor;
