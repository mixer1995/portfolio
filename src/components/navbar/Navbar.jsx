import { motion } from 'framer-motion'
import "./Navbar.scss"
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>Maksym Shkolnyi</motion.span>
                <div className="social">
                    <a href="https://github.com/mixer1995" target='_blank'><img src="/github.png" alt="gitLogo" /></a>
                    <a href="https://www.linkedin.com/in/maksym-shkolnyi-5b436716b/" target='_blank'><img src="/linkedIn.png" alt="linkedLogo" /></a>
                    <a href="https://www.facebook.com/mixer95" target='_blank'><img src="/facebook.png" alt="fbLogo" /></a>
                    {/* <a href="#" target='_blank'><img src="/dribbble.png" alt="" /></a> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;