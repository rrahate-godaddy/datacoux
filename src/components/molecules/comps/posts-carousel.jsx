export default function PostsCarousel(props) {
    if(props.currentUser == 2) {
        return (
            <div className="carousel carousel-center bg-[#ccc] rounded-box space-x-4 p-4 col-span-3 h-full">
                <div className="carousel-item">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        
                        <div class=" w-full min-h-[250px] h-full bg-[url('https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp')] bg-cover bg-center"></div>  
                        <div className="card-body">
                            <h2 className="card-title">
                            Rugged Tunes
                            <div className="badge badge-secondary badge-sm">NEW</div>
                            </h2>
                            <p>Spice up your space with rugs that rock! 🎸 Our new collection is full of vibrant patterns and textures that'll make your floors sing. 🎤  </p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Publish</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        
                        <div class=" w-full min-h-[250px] h-full bg-[url('https://plus.unsplash.com/premium_photo-1664114934715-4ee5e2526409?q=80&w=540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>  
                        <div className="card-body">
                            <h2 className="card-title">
                            New Rug Shop Video Alert! 🎬
                            <div className="badge badge-sm badge-secondary">NEW</div>
                            </h2>
                            <p>Roll out the red carpet for our latest YouTube video! 🎉 We're taking you on a tour of the hottest rug trends, styling tips, and must-have pieces for your home.  Hit that subscribe button and don't miss out!   #RugLife #NewVideo #HomeDecor</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Publish on Youtube</div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        
                        <div class=" w-full min-h-[250px] h-full bg-[url('https://images.unsplash.com/photo-1588421874990-1fe162747f9b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>  
                        <div className="card-body">
                        <h2 className="card-title">
                            New Rug Alert! 🚨
                        </h2>
                        <p>The "Groove" rug just dropped at The Rocking Rug Shop! This vibrant, textured beauty is ready to bring the rhythm to your living room. Get yours before it's gone! </p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-96 shadow-sm">
                    <div class=" w-full min-h-[250px] h-full bg-[url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>  
                        
                        <div className="card-body">
                            <h2 className="card-title">
                            Home Sweet (and Stylish!) Home ✨
                            
                            </h2>
                            <p>Just finished this stunning rug installation and we're obsessed! 😍 This cozy living room is giving us all the comfy vibes.  Want to transform your space? Let's chat! ➡️ [link to your website/contact info] #RugGoals #HomeDecor #InteriorDesign</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Publish</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card bg-base-100 w-96 shadow-sm">
                    <div class=" w-full min-h-[250px] h-full bg-[url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>  
                        <div className="card-body">
                            <h2 className="card-title">
                            Card Title
                            <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if(props.currentUser == 3) {
        return(

            <div className="grid gap-4 grid-cols-3">

                <div className="stat bg-base-100 shadow rounded-box min-h-40 col-span-2">
                    <div className="stat-title">Current Profit</div>
                    <div className="stat-value">$89,400</div>
                    <div className="stat-actions">
                    <button className="btn btn-xs">Withdrawal</button>
                    <button className="btn btn-xs">Deposit</button>
                    </div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box min-h-40">
                    <div className="stat-title">Account balance</div>
                    <div className="stat-value">$29,100</div>
                    <div className="stat-actions">
                    <button className="btn btn-xs btn-success">Add funds</button>
                    </div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box min-h-40">
                    <div className="stat-figure text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box min-h-40">
                    <div className="stat-figure text-secondary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box min-h-40">
                    <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>
                {/* <div className="stat bg-base-100 shadow rounded-box min-h-40">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                </div> */}

                <div className="stat bg-base-100 shadow rounded-box min-h-40">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-box min-h-40 col-span-2">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                

                


            </div>
        )
    }
}