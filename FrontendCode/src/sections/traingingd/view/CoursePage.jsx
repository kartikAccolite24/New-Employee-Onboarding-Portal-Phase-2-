import  { React,useState } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import acc from "./Assets/Acco.jpg"
import pic_1 from "./Assets/pic_8.jpg"
import pic_2 from "./Assets/pic_6.jpg"
import pic_3 from "./Assets/pic_7.jpg"
import pic_4 from "./Assets/pic_4.jpg"
import pic_5 from "./Assets/pic_10.jpg"
import pic_6 from "./Assets/pic_6.jpeg"



export default function CoursePage() {
    const navigate = useNavigate();
    const pics = [acc,acc,acc,acc,acc,acc,pic_1, pic_2, pic_3, pic_4, pic_5, pic_6];
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
    const course = [" Bounteous x Accolite "," Bounteous x Accolite "," Bounteous x Accolite ","Bounteous x Accolite ","Bounteous x Accolite","Bounteous x Accolite ","Java", "Python", "Web", "Cyber Security", "Machine Learning", "Big Data"];
    const description = [
        "Discover boundless digital possibilities with Accolite",
        " Transforming the Future Now | Bounteous x Accolite",
        "Our Culture | Bounteous x Accolite ",
        "Accolite University | Bounteous x Accolite",     
        "Core Values | Bounteous x Accolite ",
        "Explore Career Opportunities at Accolite Digital",
        "Write once, run anywhere with Java.",
        "Python, the versatile language for all.",
        "Build the web with HTML, CSS, and JavaScript.",
        "Protect digital assets with Cyber Security.",
        "Unlocking insights with Machine Learning.",
        "Harnessing data for insights with Big Data.",
    ]
    
    return (
        <div>
            <Slider {...settings} style={{ marginLeft: '-30px' }}>
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
            <div style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }} >
                {CreateCourseComponent(course, description, pics, navigate)}
            </div>
        </div>
    );
}

function CreateCourseComponent(course, description, pics, navigate) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return course.map((courseName, index) => (
        <div className="card rounded shadow"
            key={index}
            style={{
                width: "250px",
                height: "220px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s",
                backgroundColor: "black",
                boxShadow: "0px 4px 8px rgba(0, 0, 2, 2)",
                transform: hoveredIndex === index ? "translateY(-10px)" : "none", 
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {hoveredIndex !== index && (
                <>
                    <img className="card-img-top" src={pics[index]} alt="#" height={220} width={150} style={{ objectFit: "fill" }} />
                    <div className="card-footer" style={{ textAlign: "center", position: "absolute", bottom: "0", left: "0", width: "100%", background: "rgba(255, 255, 255, 0.8)" }}>
                        <h5 className="card-title mb-0">{courseName}</h5>
                    </div>
                </>
            )}
            {hoveredIndex === index && (
                <div className="card-body" style={{ padding: "1.25rem", color: "orange" }}>
                    <h5 className="card-title mb-3" style={{ color: "violet" }}>{courseName}</h5>
                    <p className="card-text mb-3" style={{ fontSize: "14px", lineHeight: "1.5", textAlign: "justify", color: "orange" }}>{description[index]}</p> {/* Set text color to orange */}
                    <button className="btn btn-primary btn-sm" type="submit" onClick={() => navigate("/Tutorial", { state: { n: index } })}>
                        WATCH NOW
                    </button>
                </div>
            )}
        </div>
    ));
}