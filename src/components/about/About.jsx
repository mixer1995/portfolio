import { useRef } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I build things
          <br /> for the web
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="descContainer" variants={variants}>
        <p>I'm a passionate front-end web developer with a knack for crafting engaging and responsive user interfaces. My focus is on creating seamless, visually appealing websites that deliver exceptional user experiences. With a keen eye for design and a strong command of HTML, CSS, and JavaScript, I bring ideas to life through the power of code. <a href='#Contacts'>Let's make something special.</a></p>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fast</h2>
          <p>
            Fast load times and lag free interaction, my highest priority.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive</h2>
          <p>
            My layouts will work on any device, big or small.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Intuitive</h2>
          <p>
            Strong preference for easy to use, intuitive UX/UI.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Dynamic</h2>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;