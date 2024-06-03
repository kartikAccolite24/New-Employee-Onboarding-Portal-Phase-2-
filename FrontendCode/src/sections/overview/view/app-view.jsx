import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link for routing
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppView({ onOpenNav }) {
  const images1 = [
    "s1.jfif",
    "s2.jfif",
    "s3.jfif",
    "s4.jfif",
    "s5.jfif",
    "s6.jfif",
    "s7.jfif",];
  const images2 = [
    "https://www.accolite.com/wp-content/uploads/2023/07/life_at_accolite_2.png",
    "https://www.accolite.com/wp-content/uploads/2023/07/life_at_accolite_3.png",
    "https://www.accolite.com/wp-content/uploads/2023/07/life_at_accolite_4.png",
    "https://www.accolite.com/wp-content/uploads/2023/07/life_at_accolite_1.png"
  ];
  const settings = {
    // Your settings for the Slider component
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2a, setCurrentIndex2a] = useState(0);
  const [currentIndex2b, setCurrentIndex2b] = useState(1);
  const nextSlide1 = useCallback(() => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
  }, [images1.length]);
  const nextSlide2a = useCallback(() => {
    setCurrentIndex2a((prevIndex) => (prevIndex + 1) % images2.length);
  }, [images2.length]);
  const nextSlide2b = useCallback(() => {
    setCurrentIndex2b((prevIndex) => (prevIndex + 1) % images2.length);
  }, [images2.length]);
  useEffect(() => {
    const intervalId1 = setInterval(nextSlide1, 2000);
    const intervalId2a = setInterval(nextSlide2a, 3000);
    const intervalId2b = setInterval(nextSlide2b, 3000);
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2a);
      clearInterval(intervalId2b);
    };
  }, [nextSlide1, nextSlide2a, nextSlide2b]);

  return (
    <><Slider {...settings} style={{ marginLeft: '-30px' }}>
    <div>
      <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a114440124164fff93e6d4c0__Darwinbox%20Banner_2%20copy.jpg" alt="Slide 1" />
    </div>
    <div>
      <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a46922613264fff93ee90d4__Embrace%20Excellence_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 2" />
    </div>
    <div>
      <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a89337630364fff93ecd7d3__One%20Team%2C%20One%20Dream_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
    </div>
    <div>
      <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a110357827864fff93eb3b0a__Fearless%20Thinkers_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
    </div>
    <div>
      <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a39387173164fff93f1b97a__Cultivate%20Care%20%26%20Compasion_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
    </div>
  </Slider>
    <div style={{ boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.7)", marginTop: "50px" , width:"970px", height:"1600px"}}>
      {/* Add image above the slideshow */}
      {/* <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" alt='' style={{ marginTop: "30px", marginLeft: "80px", width: "400px", height: "50px", marginRight:"40px"}} /> */}
      <Container maxWidth="xl" style={{ paddingTop: "70px", display: "flex", marginBottom: "20px", width: "1000px", height: "370px", marginTop: "6px" }}>
        <div style={{ borderRadius: "20px", flex: 1, position: 'relative', boxShadow: "2px 8px 16px 0px rgba(0, 0, 0, 1)" }}>
          <img src={images1[currentIndex1]} alt={`Slide ${currentIndex1}`} style={{ borderRadius: "20px", width: "100%", height: "300px" }} />
        </div>
        <div style={{fontFamily: "Poppins", flex: 1, paddingLeft: "20px", marginTop: "100px", color: "black" }}>
          <Typography>
            Employees at Accolite are driven to push the boundaries of what&apos;s
            possible and keep us all ahead of the cutting edge. A diverse,
            yet unified team spanning continents and cultures, we are indispensable
            allies to ourselves and our customers&ndash;we love what we do,
            and we do it with heart and balance in our work and personal lives.
          </Typography>
        </div>
      </Container>
      <div>
        <Typography variant="h4" style={{ fontFamily: "Poppins", textAlign: "center", marginTop: "50px" }}>
          Life at Accolite
        </Typography>
        <Container style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", width: "900px", height: "400px", marginTop: "10px" }}>
          <div style={{ position: 'relative', boxShadow: "2px 8px 16px 0px rgba(0, 0, 0, 1)" }}>
            <img src={images2[currentIndex2a]} alt={`Slide ${currentIndex2a}`} style={{ width: "100%", height: "100%" }} />
          </div>
          <div style={{ position: 'relative', boxShadow: "2px 8px 16px 0px rgba(0, 0, 0, 1)" }}>
            <img src={images2[currentIndex2b]} alt={`Slide ${currentIndex2b}`} style={{ width: "100%", height: "100%" }} />
          </div>
        </Container>
      </div>
      <div style={{ marginTop: "70px", display: "flex", justifyContent: "center", alignItems: "center", height: "600px" }}>
        <video controls style={{ objectFit: 'fill', borderRadius: "20px", height: "305px", width: "500px", marginLeft: "60px", boxShadow: "6px 8px 16px 0px rgba(0, 0, 0, 1)" }}>
          <track src="path_to_captions.vtt" kind="captions" srcLang="en" label="English Captions" default />
          <source src="https://www.accolite.com/wp-content/uploads/2024/01/Accolite_BrandVideo_LowRes_640x360.mp4" type="video/mp4" />
        </video>
        <Typography style={{ fontFamily: "Poppins", width: "50%", textAlign: "justify", marginLeft: "20px", marginTop: "70px", marginRight:"20px",color: "black" }}>
          We make the future faster for the world&apos;s most ambitious brands.
          Our fusion of emerging technologies, proven processes, and
          deep expertise create unlimited opportunities for growth.
          Guided by our proven methodology of collaborative partnership,
          Co-Innovation, we see beyond current constraints and do things
          differently, amplifying new horizons and pushing the boundaries
          of what&rsquo;s possible for exponential success.
          Experts in design-led digital engineering, we thrive on our
          clients&rsquo; most complex challenges. We combine unrivaled industry
          experience with ingenuity to create business results that matter
          and value that endures
        </Typography>
      </div>
      {/* Start your Onboarding Process Button */}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/personal"
        style={{
          width:"300px",
          marginLeft: "350px",
          marginBottom:"50px",
          border: "2px solid #3f51b5",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          borderRadius: "5px",
          padding: "10px 20px",
          textDecoration: "none", // Remove default underline
          color: "#fff", // Text color
          fontWeight: "bold", // Bold text
          
        }}
      >
        Start your Onboarding Process
      </Button>
    </div></>
  );
}

AppView.propTypes = {
  onOpenNav: PropTypes.func,
};
