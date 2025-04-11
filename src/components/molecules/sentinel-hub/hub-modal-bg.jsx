import { useEffect, useState } from "react"
import ControlBar from "./control-bar"
import { motion, animate, stagger } from "motion/react"
import "../../../styles/styles.css"

export default function HubModalBG(){

    const [modalOpen, setModalOpen] = useState(true);
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

    useEffect(() => {
        
        console.log("starting fetch");

        // Asynchronous function to post data to the API endpoint
        async function postData() {
          try {
            const response = await fetch('https://caas.api.godaddy.com/v1/prompts', {
              method: 'POST',
              headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                prompt: "write a poem",
                provider: "openai_chat",
                providerOptions: {
                  model: "gpt-3.5-turbo"
                }
              })
            });
            
            // Check if the response is successful
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Convert the response data to JSON
            const data = await response.json();
            console.log("Success:", data);
          } catch (error) {
            console.error("Error during fetch:", error);
          }
        }
        
        // Call the asynchronous function
        postData();
        console.log("fetch complete");
      }, []); 


    return (
        <>
            <div className="flex justify-center items-center h-screen w-full">
                <button className="btn rounded-full px-6 font-normal" onClick={openModal}>Ask Airo</button>
            </div>
            {modalOpen && 
                <dialog className="modal modal-open" id="my_modal_3">
                    <div className="modal-box w-11/12 h-11/12 max-h-11/12 max-w-5xl relative p-0 overflow-hidden modal-bg">
                        <form method="dialog" >
                            <div className="flex flex-row justify-end items-center fixed p-2 w-full">
                                
                                <button className="btn btn-sm btn-circle btn-ghost text-gray-300" onClick={changePanels}>
                                    {panels == 0 ? "0" : panels == 1 ? "1" : "2"}
                                </button>
                                <button className="btn btn-sm btn-circle btn-ghost" onClick={() => setModalOpen(false)}>✕</button>
                            </div>
                            
                        </form>
                       
                        
                        
                    </div>
                </dialog>
            }
        </>
    )
}
