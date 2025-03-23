import { motion } from "motion/react"
import { useEffect, useState } from "react";
export default function ControlBar(props){

    useEffect(() => {
        console.log("hello")
    }, []);

    useEffect(() => {
        console.log(props.panels)
    }, [props.panels]);
    
    return (
        <motion.div
            className={`flex items-end   h-[100px] sticky bottom-0 left-0 z-50 pb-6
                ${props.panels == 0 ? "justify-center w-full bg-linear-to-t from-stone-50/50 to-stone-50/10" : null}
                ${props.panels == 1 ? "justify-center w-[53%]" : null}
                ${props.panels == 2 ? "justify-center w-[40%]" : null}
            `}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: ["0.2", "1"], y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                
            }}
        >
            <motion.div className={`border-gray-100 border-1 rounded-lg p-4 shadow-md min-h-[100px] bottom-10 bg-white
                ${props.panels == 0 ? "w-8/12" : null}
                ${props.panels == 1 ? "w-10/12" : null}
                ${props.panels == 2 ? "w-10/12" : null}
              `}
              layout
            >
                <div className="border-2 border-gray-200 rounded-md p-2 text-gray-500 min-h-10"></div>
                <div className="flex flex-row justify-between mt-2">
                    <a href="#" className="text-xs text-blue-600">Ask Airo</a>
                    <a href="#" className="text-xs text-blue-600">Chat History</a>
                </div>
            </motion.div>
        </motion.div>
    );
}