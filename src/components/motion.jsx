import { useEffect, useState } from "react";
import { motion } from "motion/react"
import "../styles/styles.css"

import SetupTasks from "./molecules/comps/setup-tasks";
import PostsCarousel from "./molecules/comps/posts-carousel";
import DomainSearch from "../images/domain-search.png"

export default function Motion() {
    
    const [currentUser, setCurrentUser] = useState(1);
    const [name, setName] = useState("Athena");

    const switchUser = () => {
        console.log("Switching user", currentUser)
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

    return (
        <div className="p-6 my-10 min-h-screen h-full">
            <div className="mx-auto max-w-[1200px] flex justify-between items-start mb-6">
                <div>
                    <h1 className="font-bold text-2xl">Welcome, {name}!</h1>
                    <div className="text-xs text-gray-500 text-normal">
                        {name == "Rasmus" ? "New Customer, Purchased a Domain, Purchased a Website" : null}
                        {name == "Diana" ? "Existing Customer, Active in social marketing, Browsed OLS capabilities in the last visit" : null}
                        {name == "Cleopatra" ? "Existing Customer, Owns 2 Domains, Uses OLS with 18 products, uses Paylinks, Has Shopped for other domain" : null}
                    </div>
                        
                </div>


                <div className="avatar avatar-placeholder" onClick={switchUser}>
                        <div className="bg-neutral text-neutral-content w-10 mask mask-squircle">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                            </svg>

                            </span>
                        </div>
                    </div>
            </div>
            <motion.div
                className="grid gap-4 h-fit max-w-[1200px] mx-auto grid-cols-4" layout
                transition={{ duration: 0.5 }}
            >   

                <motion.div className={`card shadow-sm min-h-30
                    
                    ${currentUser == 1 ? "hidden" : "col-span-3 row-span-3 h-full"}

                `} layout><PostsCarousel /></motion.div>
                
                <motion.div className={`card bg-base-100 card-md shadow-sm min-h-30
                    
                    ${currentUser == 1 ? "col-span-3 row-span-3 " : "col-span-1 row-span-4"}

                `} layout>
                    <SetupTasks currentUser={currentUser} />
                </motion.div>

                <motion.div className={`card bg-base-100 card-md shadow-sm h-full bg-linear-to-r from-white-500 to-gray-100 
                    
                    ${currentUser == 1 ? "bg-[url(https://images.unsplash.com/photo-1739000247558-bc6b37b84d64?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]" : null} 
                    ${currentUser == 2 ? "bg-[url(https://dashboard.godaddy.com/_next/image?url=https%3A%2F%2Fimg1.wsimg.com%2Fisteam%2Fstock%2F18558%2F%3A%2Frs%3Dh%3A220%3Ffm%3Dwebp&w=3840&q=75)]" : null} 
                    ${currentUser == 3 && "hidden"}
                
                        bg-cover`} layout>
                        <div className="card-body max-h-60">
                        <h2 className="text-white card-title">
                            {currentUser == 1 ? "Parkour Rookies" : null}
                            {currentUser == 2 ? "Empanads" : null}
                        </h2>
                        <div className="w-full max-h-[100px] h-[100px] rounded " ></div>
                            
                        </div>
                        <div className="bg-linear-to-r from-gray-500/40 to-gray-100/40 p-4 rounded-b">
                        <div className="card-actions justify-between items-center ">
                                {currentUser == 1 &&
                                    <div className="badge badge-md badge-neutral">Published</div>
                                }

                                {currentUser == 2 &&
                                    <div className="badge badge-md">Draft</div>
                                }
                                
                                <button className="btn btn-sm">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                        <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                                    </svg> */}


                                    Edit
                                </button>
                            </div>
                        </div>
                </motion.div>
          
                <motion.div className={`card bg-base-100 card-md shadow-sm w-full h-full p-4 flex items-start justify-between 
                                        ${currentUser == 3 && "hidden"}
                    `} layout>
                    
                        <div className={`text-lg font-bold mb-2 w-full pt-2 
                            ${currentUser == 2 ? 'text-center' : 'text-left'}`}>Find a new domain</div>
                        {currentUser == 2 &&
                            <div className="w-full h-auto my-4">
                                <img src={DomainSearch.src} className="w-full h-grow max-h-24 object-contain" />
                            </div>
                        }
                    
                        <label className="input input-bordered flex items-center">
                            <input type="text" className="grow w-full" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                        </label>
                    
                  
                </motion.div>
                
                <motion.div className={`card bg-base-100 card-md shadow-sm min-h-10
                    
                    ${currentUser == 1 ? "h-full" : "hidden"}

                `} layout>

                    <div className="flex flex-row items-center justify-between p-4 h-full">
                        <div>Auto Renew</div>
                        <div><input type="checkbox" className="toggle" defaultChecked /></div>
                    </div>

                </motion.div>

                <motion.div className={`card bg-base-100 card-md shadow-sm flex flex-row justify-between items-center p-6 gap-4
                    
                    ${currentUser == 1 ? "h-full min-h-30 col-span-2" : "hidden"}

                `} layout>
                    <div>
                        <h2 className="text-2xl mb-4">Build brand awareness and attract new customers</h2>
                        <p className="text-sm text-gray-400">Create, schedule, and track scroll-stopping social posts all in one place.</p>
                        <button className="btn btn-outline btn-accent mt-4">Learn more</button>

                    </div>

                    <img src="https://img1.wsimg.com/rad/Marketing-Illo3.webp" className="w-auto h-40" />
                    

                </motion.div>


                <motion.div className={`card bg-base-100 card-md shadow-sm  h-full min-h-30 

                        ${currentUser == 1 ? "col-span-2" : null}
                        ${currentUser == 2 ? "h-full min-h-30 " : null}
                        ${currentUser == 3 ? "col-span-3" : null}

                `} layout>
                
                {currentUser == 1 &&
                    <div className="flex flex-row justify-between items-center p-6 gap-4">
                        <div>
                            <h2 className="text-2xl mb-4">Manage your social platforms, all in one place</h2>
                            <p className="text-sm text-gray-400">
                                Customers who share their store on social media get 2X the orders.
                            </p>
                            <button className="btn btn-outline btn-accent mt-4">Get Connected</button>

                        </div>

                        <img src="https://img1.wsimg.com/rad/social-visual-art.webp" className="w-auto h-40" />
                    </div>
                }

                {currentUser == 2 &&
                    <div className="flex flex-col justify-between items-center p-4 gap-2 text-center h-full w-full">
                        <img src="https://s.zkcdn.net/Advertisers/94be780907a246448e648415a3dd24ef.png" className="w-auto h-26" />
                        <div className="w-full">
                            
                            <p className="text-sm text-gray-400">
                            Selling in person?<br /> 
                            Get free Point of Sale device
                            </p>
                            <button className="btn btn-outline btn-accent mt-4 w-full">Learn more</button>

                        </div>

                        
                    </div>
                }

                {currentUser == 3 &&
                
                    <div className="flex flex-row justify-start items-center p-6 gap-4 h-full">
                        <img src="https://s.zkcdn.net/Advertisers/94be780907a246448e648415a3dd24ef.png" className="w-auto h-26 mr-4" />
                        <div>
                            <h2 className="text-2xl mb-4">Selling in person? Get free Point of Sale device</h2>
                            <p className="text-sm text-gray-400">
                            Modernize your in-person sales with an all-in-one GoDaddy Smart Terminal POS device available to you for free! Terms apply.
                            </p>
                            <button className="btn btn-outline btn-accent mt-4">Learn more</button>

                        </div>

                        
                    </div>
                }
                
                
                </motion.div>
                <motion.div className={`card bg-base-100 card-md shadow-sm  
                    
                    ${currentUser == 1 ? "hidden" : "hidden"}
                    

                `} layout>
                        <div className="card bg-base-100  shadow-sm">
                            
                            <div class=" w-full min-h-[150px] h-full bg-[url('https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp')] bg-cover bg-center"></div>  
                            <div className="card-body">
                                <h2 className="card-title">
                                Rugged Tunes
                                <div className="badge badge-secondary badge-sm">NEW</div>
                                </h2>
                                <p>Spice up your space .... 🎤  </p>
                             
                            </div>
                        </div>


                </motion.div>
            </motion.div>
        </div>
    );
}