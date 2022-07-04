import './fonts.css'
import LogoImage from './images/Logo.svg';
import TwitterLogo from './images/Twitter.svg';
import BackgroundAvatarDistributor from './BackgroundAvatarDistributor';


function App() {
  // Renders the landing page
  return (
    <div className="bg-[rgb(2,50,66)]">
    <BackgroundAvatarDistributor />
    <div className="py-8 w-screen flex flex-col  min-h-screen justify-between z-0 container mx-auto">
      <div className="">
        <img src={LogoImage} alt=""/>
      </div>
      <div className="space-y-6 z-50">
        <h1 className="font-family-sen font-bold text-5xl text-[rgb(48,245,199)]">
          Meet New Entrepreneurs
        </h1>
        <p className="text-xl text-[rgb(169,188,198)] font-family-inter">
          Meeet is the new social media platform for
          entrepreneurs to connect and socialize.
        </p>
        <button className={`
          text-xl font-family-inter  px-6 py-5 bg-[rgb(48,245,199)] rounded font-bold text-[rgb(2,50,66)]
          hover:underline
          `} onClick={() => alert('nice click')}>
          Get notified at launch
        </button>
      </div>
      <div className="z-50">
        <button className={`
          flex font-family-inter items-center text-lg text-[rgb(169,188,198)]
          hover:underline
        `} onClick={() => window.open('https://twitter.com', '_blank')}>
          <img src={TwitterLogo} alt=""/>
          <p className="ml-4">
            Follow us on Twitter
          </p>
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
