import React from "react";
import { motion } from "framer-motion";

export default function LogoAnimation() {
    return (
        <motion.img
            src={'/images/yellowLogo.png'}
            alt={'logo image'}
            style={{ width: "200px", height: "200px" }}
            animate={{ rotate: 360 }}
            transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
            }}
        />
    );
}
