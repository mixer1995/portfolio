import { motion } from 'framer-motion'
import './Hero.scss'
import pdfLink from './../../download/MShkolnyi-CV.pdf'
import scrollImg from './../../images/scroll.png'
import heroImg from './../../images/hero.jpg'
import heroImgNew from './../../images/heroNew.jpg'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-450%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
} 

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>MAKSYM SHKOLNYI</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and Programmer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.a href='#Portfolio' variants={textVariants}>See the Latest Works</motion.a>
                        <motion.a href='#Contacts' variants={textVariants}>Contact Me</motion.a>
                        <motion.a href={pdfLink} download='MShkolnyi-CV.pdf' variants={textVariants}>Download CV</motion.a>
                    </motion.div>
                    <motion.img src={scrollImg} alt="" variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
                Web-Developer Programmer
            </motion.div>
            <div className="imageContainer">
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
}

export default Hero;
