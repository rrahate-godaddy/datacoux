import { useEffect, useState } from "react"
import ControlBar from "./control-bar"
import { motion, animate, stagger } from "motion/react"
import "../../../styles/styles.css"

export default function HubModal(){

    const [modalOpen, setModalOpen] = useState(false);
    const [panels, setPanels] = useState(0);


    function openModal(){
        setModalOpen(true);
        const modal = document.getElementById("my_modal_3");
        modal.showModal();
    }

    function changePanels(){
        if(panels == 2){
            setPanels(0);
        } else {
            setPanels(panels + 1);
        }
    }


    return (
        <>
            <div className="flex justify-center items-center h-screen w-full">
                <button className="btn rounded-full px-6 font-normal" onClick={openModal}>Ask Airo</button>
            </div>
            {modalOpen && 
                <dialog className="modal modal-open" id="my_modal_3">
                    <div className="modal-box w-11/12 h-11/12 max-h-11/12 max-w-5xl bg-linear-45 from-[#D3C1F7]/25 via-[#fff] to-[#D3C1F7]/30 relative p-0">
                        <form method="dialog" >
                            <div className="flex flex-row justify-end items-center fixed p-2 w-full">
                                
                                <button className="btn btn-sm btn-circle btn-ghost text-gray-300" onClick={changePanels}>
                                    {panels == 0 ? "0" : panels == 1 ? "1" : "2"}
                                </button>
                                <button className="btn btn-sm btn-circle btn-ghost" onClick={() => setModalOpen(false)}>✕</button>
                            </div>
                            
                        </form>
                        {panels == 0 &&
                        <motion.div className="grid grid-flow-row grid-cols-4 gap-8 p-10 pb-0"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                    }
                                }
                            }}
                        >
                            {[...Array(16)].map((_, index) => (
                                <motion.div key={index} className="h-50 bg-linear-to-r from-gray-200 to-slate-200/80 rounded-md animate-gradient"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                       
                                    }}
                                ></motion.div>
                            ))}
                        </motion.div>

                        }
                        
                        {panels == 1 &&
                            <motion.div className="grid grid-flow-row grid-cols-2 gap-8 p-10 mb-0"
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    
                                }}
                            
                            layout >
                                <div className="h-4/4 rounded-md [height:calc(100vh-180px)]"></div>
                                <div className="bg-blue-200 rounded-md  [height:calc(100vh-135px)]"></div>
                            </motion.div>
                        }

                        {panels == 2 &&
                            <motion.div className="flex flex-row gap-8 p-10 pb-0 mb-0" 
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    
                                }}
                            layout>
                                <div className="h-4/4 rounded-md w-[40%] [height:calc(100vh-180px)]"></div>
                                <div className="bg-blue-200 rounded-md w-[70%] [height:calc(100vh-135px)]"></div>
                            </motion.div>
                        }
                        
                        <ControlBar panels={panels} />
                    </div>
                </dialog>
            }
        </>
    )
}
