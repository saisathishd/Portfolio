import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Line Following Robot",
    img: "/Arduino.png",
    link: "https://github.com/saisathishd/Arduino_Project",
    desc: "Choose Arduino, IR sensors, motors, and chassis. Connect sensors to Arduino's digital pins. Attach sensors underneath the robot and connect motors to the Arduino. Write code in Arduino IDE to read sensor inputs and control motors. Test the robot on a track, adjust sensor thresholds and positions for accuracy. Optional: Add features like obstacle detection or Bluetooth control for enhanced functionality.",
  },
  {
    id: 2,
    title: "Covid Tracker",
    img: "/covi.jpg",
    link: "https://github.com/saisathishd/Covid-Tracker",
    desc: "A COVID tracker app serves as a vital tool in keeping communities informed and safe during the pandemic. It provides real-time updates on case numbers, testing locations, and health guidelines, empowering users to make informed decisions about their safety and well-being. With features like interactive maps, vaccine information, and symptom checkers, these apps play a crucial role in curbing the spread of the virus and promoting public health measures.",
  },
  {
    id: 3,
    title: "Government Tender Allocation",
    img: "/gov.jpg",
    link: "https://github.com/saisathishd/Government-Tender-Allocation",
    desc: "Created a website using JSP and Servlets that bridges the gap between 3 users which is buyers, sellers, and land registry officials. This platform streamlines communication and interaction, making the land registration process smoother for everyone involved.",
  },
  {
    id: 4,
    title: "The Blood Kart",
    img: "/blood.png",
    link: "https://github.com/saisathishd/The-blood-Kart-Project",
    desc: "Blood Kart is a dynamic web application designed to revolutionize the coordination of blood donations, bed availability management, and medicine inventory tracking within the healthcare sector. This comprehensive platform acts as a centralized hub, connecting donors, hospitals, pharmacies, and patients in need of critical medical resources.",
     },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            >
              See Source Code
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
