import { useEffect } from "react"
import "../../../styles/styles.css"

export default function SetupTasks(props) {

    if(props.currentUser == 1) {

        return(
            <ul className="list bg-base-100 rounded-box row-span-3">
                    
                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Here's how to get set up</li>
                    
                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                        <div className="list-col-grow">
                            <div>Host a Website</div>
                            <div className="text-[10px] uppercase font-semibold opacity-30">host a website</div>
                        </div>
                    </li>

                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                        <div className="list-col-grow">
                            <div>Add Domain Protection</div>
                            <div className="text-[10px] uppercase font-semibold opacity-30">Secure your domain </div>
                        </div>
                    </li>

                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                        <div className="list-col-grow">
                            <div>Link Your Social Accounts</div>
                            <div className="text-[10px] uppercase font-semibold opacity-30">Connect to social media</div>
                        </div>
                    </li>

                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">04</div>
                        <div className="list-col-grow">
                            <div>Customize Your Coming Soon Page</div>
                            <div className="text-[10px] uppercase font-semibold opacity-30">Build excitement</div>
                        </div>
                    </li>

                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">05</div>
                        <div className="list-col-grow">
                            <div>Create an LLC (Optional)</div>
                            <div className="text-[10px] uppercase font-semibold opacity-30">Establish a legal business entity</div>
                        </div>
                    </li>
                    <li className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">06</div>
                        <div className="list-col-grow">
                            <div>Upgrade to a Full Website</div>
                            <div className="text-[10px] uppercase font-semibold opacity-30">Develop your online presence</div>
                        </div>
                    </li>


                        
                </ul>
        )
        
    } else if(props.currentUser == 2) {

        return(
            <ul className="list bg-base-100 rounded-box  row-span-1">
                        
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Your social manager</li>
                        
                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">MO</div>
                            <div className="list-col-grow">
                                <div>Publish Rug Shop Video</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Showcase new rug collection...</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">MO</div>
                            <div className="list-col-grow">
                                <div>Email Marketing Campaign</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Promote special offers to subscribers</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">TU</div>
                            <div className="list-col-grow">
                                <div>Instagram Engement</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Reply to comments and likes</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">WE</div>
                            <div className="list-col-grow">
                                <div>Performance</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Tiktok: Review campaign performance</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">WE</div>
                            <div className="list-col-grow">
                                <div>Performance</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Facebook: Review campaign performance</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">TH</div>
                            <div className="list-col-grow">
                                <div>Publish shop interview video</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Scheduled: Youtube release 1pm cst</div>
                            </div>
                        </li>
                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">TH</div>
                            <div className="list-col-grow">
                                <div>Review video engagement</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Video Engagement</div>
                            </div>
                        </li>
                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">FR</div>
                            <div className="list-col-grow">
                                <div>Review performance</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Review on platform</div>
                            </div>
                        </li>
                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">FR</div>
                            <div className="list-col-grow">
                                <div>Analytics</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Develop your online presence</div>
                            </div>
                        </li>


                            
            </ul>
        )
    } else if(props.currentUser == 3) {

        return(
            <ul className="list bg-base-100 rounded-box  row-span-1">
                        
                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">You Products</li>
                        
                        <li className="list-row">
                            
                            <span className="material-symbols-outlined !text-[50px] material-symbols-filled text-green-500 outline-0">
                                laundry
                            </span>
                            
                            <div className="list-col-grow">
                                <div className="text-2xl">T-Shirt</div>
                                <div className="text-[10px] font-normal opacity-60">Shellington Collection XRS</div>
                                <div className="flex flex-row justify-start mt-2 gap-2">
                                    <div className="badge badge-outline badge-primary">$50</div>
                                    <div className="badge badge-dash badge-info">Qty: 2000</div>
                                </div>
                            </div>
                        </li>

                        <li className="list-row">
                            
                            <span className="material-symbols-outlined !text-[50px] material-symbols-filled text-cyan-500 outline-0">
                            
                                local_cafe
                            
                            </span>
                            
                            <div className="list-col-grow">
                                <div className="text-2xl">Coffee Mug</div>
                                <div className="text-[10px] font-normal opacity-60">Shellington Collection XRS</div>
                                <div className="flex flex-row justify-start mt-2 gap-2">
                                    <div className="badge badge-outline badge-primary">$35</div>
                                    <div className="badge badge-dash badge-info">Qty: 4000</div>
                                </div>
                            </div>
                        </li>

                        <li className="list-row">
                            
                            <span className="material-symbols-outlined !text-[50px] material-symbols-filled text-cyan-500 outline-0">
                            
                                aod_watch
                            
                            </span>
                            
                            <div className="list-col-grow">
                                <div className="text-2xl">Luxury Watch</div>
                                <div className="text-[10px] font-normal opacity-60">Custom Seiko Diver</div>
                                <div className="flex flex-row justify-start mt-2 gap-2">
                                    <div className="badge badge-outline badge-primary">$199</div>
                                    <div className="badge badge-dash badge-info">Qty: 100</div>
                                </div>
                            </div>
                        </li>

                        <li className="list-row">
                            
                            <span className="material-symbols-outlined !text-[50px] material-symbols-filled text-lime-400 outline-0">
                            
                                steps
                            
                            </span>
                            
                            <div className="list-col-grow">
                                <div className="text-2xl">Nike Waffle</div>
                                <div className="text-[10px] font-normal opacity-60">Custom red swoosh</div>
                                <div className="flex flex-row justify-start mt-2 gap-2">
                                    <div className="badge badge-outline badge-primary">$129</div>
                                    <div className="badge badge-dash badge-info">Qty: 5000</div>
                                </div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">WE</div>
                            <div className="list-col-grow">
                                <div>Performance</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Facebook: Review campaign performance</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">TH</div>
                            <div className="list-col-grow">
                                <div>Publish shop interview video</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Scheduled: Youtube release 1pm cst</div>
                            </div>
                        </li>
                        <li className="list-row">
                            <div className="text-4xl font-thin opacity-30 tabular-nums">TH</div>
                            <div className="list-col-grow">
                                <div>Review video engagement</div>
                                <div className="text-[10px] uppercase font-semibold opacity-30">Video Engagement</div>
                            </div>
                        </li>
                       


                            
            </ul>
        )
    }
}