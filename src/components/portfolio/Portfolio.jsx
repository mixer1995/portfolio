import { useRef, useEffect, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Game Hub (ReactJS)",
    img: ["/gameHub.png"],
    desc: ["I've developed a React project that serves as a versatile game library. Users can easily sort and manage their games by genre, platform, and search queries. The project fetches data from an external API, ensuring that the latest games, genres, and platforms are readily available. To maintain a seamless user experience, loading skeletons are displayed during data retrieval.", "In addition to its practical features, the project offers a choice between light and dark themes, allowing users to tailor their interface to their preferences. What sets this project apart is its full responsiveness, ensuring that the application adapts smoothly to different screen sizes and devices, making it accessible and enjoyable for users across the board."],
    target: "https://mixer1995.github.io/game_hub/",
    srcTarget: "https://github.com/mixer1995/game_hub"
  },
  {
    id: 2,
    title: "Employee Knowledge Hub (Php)",
    img: ["/leanP-01.png", "/leanP-02.png", "/leanP-03.png", "/leanP-04.png", "/leanP-05.png"],
    desc: ["The Employee Knowledge Hub is a one-stop platform, developed in-house, that enables employees to access learning materials, take tests, review their results, and sign essential documents. Empower your workforce with this intuitive and efficient tool for continuous learning and development!", "In addition - fully responsive design is implemented, so that employees would be able to use this portal on any device."],
    target: "http://man.e-pienas.lt/index.php",
    srcTarget: ""
  },
  {
    id: 3,
    title: "OEE tracking site (Php)",
    img: ["/oeeP-01.png","/oeeP-02.png","/oeeP-03.png"],
    desc: ["Elevate your manufacturing operations to new heights with our state-of-the-art OEE tracking site. Our platform offers real-time data visualization that provides valuable insights into your production processes, enabling you to identify and address bottlenecks, downtime, and inefficiencies on the fly. By harnessing the power of real-time data, you can make informed decisions that lead to significant improvements in productivity, quality, and overall operational effectiveness. Streamline your manufacturing processes, optimize resource utilization, and boost your bottom line with our OEE tracking site."],
    target: "",
    srcTarget: ""
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % item.img.length);
    }, 5000); // Change images every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [item.img.length]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <img src={item.img[currentIndex]} alt="" /> */}
            {item.img.map((image, i) => (
              <img key={i} src={image} alt="" style={{ opacity: i === currentIndex ? 1 : 0 }} />
            ))}
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            {item.desc.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <div>
              {item.target !== "" && <a href={item.target} target="_blank">See Demo</a>}
              {item.srcTarget !== "" && <a href={item.srcTarget} target="_blank">Code</a>}
            </div>
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