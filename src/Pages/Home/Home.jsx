import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Components/TitleCards/TitleCards';
import cards_data from '../../assets/cards/Cards_data';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-image'/>
        <div className="hero-caption">
            <img src={hero_title} alt="" className='caption-img' />
            <p>The Protector" is a Turkish action-packed thriller series that follows the journey of Hakan Demir, a young Istanbul shopkeeper who discovers his connection to an ancient secret order tasked with protecting the city. Hakan's life is turned upside down when he realizes he is the last line of defense against an immortal enemy known as the Immortals, who seek to control Istanbul's ancient mystical powers. </p>
            <div className="hero-btn">
                <button className='btn '><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
            </div>
            <TitleCards cardsData={cards_data}/>
        </div>
      </div>
      <div className="morecards">
        <TitleCards title={"Blockbuster movies"} category={"top_rated"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Recommended movies"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
