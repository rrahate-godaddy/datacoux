import { useEffect, useState } from "react";
import "../styles/styles.css"
import User1Dashboard from "./molecules/user1";
import User2Dashboard from "./molecules/user2";
import User3Dashboard from "./molecules/user3";
import Modal from "./molecules/modal";

export default function Main() {
    const [currentUser, setCurrentUser] = useState(1);
    const [name, setName] = useState("Raddus Romelus");
    

    const switchUser = () => {
        console.log("Switching user")
        setCurrentUser((prevUser) => (prevUser % 3) + 1);
    };

    useEffect(()=> {
        console.log(currentUser)
        // document.getElementById('my_modal_4').showModal()

        switch (currentUser) {
            case 1:
                setName("Rasmus");
                break;
            case 2:
                setName("Diana");
                break;
            case 3:
                setName("Cleopatra");
                break;
            default:
                setName("Raddus Romelus");
        }

    },[currentUser])

    const renderDashboard = () => {
        switch (currentUser) {
            case 1:
                return <User1Dashboard />;
            case 2:
                return <User2Dashboard />;
            case 3:
                return <User3Dashboard />;
            default:
                return null;
        }
    };

    return (
        <div className="mb-[50px] max-w-[1200px] mx-auto">
            <header className="px-6 pt-6 pb-8 flex justify-between items-start">
                <h1 className="text-3xl font-bold">
                    Welcome, {name}!

                    <div className="text-normal font-normal text-sm mt-2">A vintage campervan, affectionately nicknamed "The Wanderer," carried its owners on a cross-country adventure.</div>
                </h1>
                

                {(() => {
                switch (currentUser) {
                    case 1:
                    return  <div className="avatar avatar-placeholder" onClick={switchUser}>
                        <div className="bg-neutral text-neutral-content w-10 mask mask-squircle">
                            <span>R2</span>
                        </div>
                    </div>;
                  
                    case 2:
                    return  <div className="avatar avatar-placeholder" onClick={switchUser}>
                        <div className="bg-neutral text-neutral-content w-10 mask mask-squircle">
                            <span>D2</span>
                        </div>
                    </div>

                    case 3:
                    return  <div className="avatar avatar-placeholder" onClick={switchUser}>
                        <div className="bg-neutral text-neutral-content w-10 mask mask-squircle">
                            <span>C3</span>
                        </div>
                    </div>;

                    default:
                    return null;
                }
                })()}

               
              
            </header>

            <div className="mx-5 border-b-2 h-2 border-[#ddd] mb-4"></div>
            
            <div className="p-4">
                
                {renderDashboard()}
            </div>

            <Modal userVal={currentUser} name={name} />
        </div>
    );
}


