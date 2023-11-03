import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './Cursor.scss'


const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mouse", mouseMove);
        }
    }, [])

    return (
        <motion.div className='cursor' animate={{x:position.x-20, y:position.y-20}}></motion.div>
    );
}

export default Cursor;