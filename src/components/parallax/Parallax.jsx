import { useRef } from 'react'
import './Parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import planets from './../../images/planets.png'
import sun from './../../images/sun.png'

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["-500%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

    return (
        <div
            className='parallax'
            ref={ref}
            style={{
                background:
                    type === "aboutMe"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)"
            }}
        >
            <motion.h1 style={{ y: yText }}>{type == "aboutMe" ? "About Me" : "Portfolio"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div 
                style={{ y: yBg, backgroundImage: `url(${
                    type === "aboutMe"
                        ? planets
                        : sun
                })` }} 
                className="planets"
            ></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
}

export default Parallax;