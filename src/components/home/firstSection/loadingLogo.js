import React from "react";
import { motion } from "framer-motion";
import "./loadingLogo.css";

export default function LoadingLogo({ onFinish }) {

    return (
        <div>
            <motion.img
                src="/images/yellowLogo.png"
                alt="Loading"
                className="loading-image"
                initial={{ rotate: 0, scale: 1, opacity: 1 }}
                animate={{
                    rotate: [0, 720, 1080],
                    scale: [1, 1, 0],
                    opacity: [1, 1, 0],
                }}
                transition={{
                    duration: 3,
                    times: [0, 0.8, 1],
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
