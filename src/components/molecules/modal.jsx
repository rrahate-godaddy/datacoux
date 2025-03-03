import { useEffect, useState } from "react";

function Modal(props){

    const[imgUrl, setImgUrl] = useState(null);
    const[name, setName] = useState(props.name);
    const[lastVisit, setLastVisit] = useState("2 days ago");
    const[has, setHas] = useState(null);

    useEffect(() => {
        setName(props.name);
    },[props.name]);

    useEffect(() => {
        switch (props.userVal) {
            case 1:
                setImgUrl(`https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;`)
                setLastVisit("2 days ago")
                setHas("New Customer, Purchased a Domain, Purchased a Website")
                break;
            case 2:
                setImgUrl(`https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;`)
                setLastVisit("15 day ago")
                setHas("Existing Customer, Indicated social marketing intent in onboarding, Browsed OLS capabilities in the last visit")
                break;
            case 3:
                setImgUrl(`https://plus.unsplash.com/premium_photo-1670884441862-ddb29ed1f25e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`)
                setLastVisit("32 days ago")
                setHas("Existing Customer, Owns 2 Domains, Uses OLS with 18 products, uses Paylinks, Has Shopped for other domain")
                break;
            default:
                return null;
        }

    }, [props.userVal]);

    

  return (
    
    <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-6/12 h-[50vh] max-w-[900px] flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center text-center p-10 ">
                <div className="avatar">
                    <div className="mask mask-squircle w-24 mb-10">
                        <img src={imgUrl} />
                    </div>
                </div>
                <h3 className="font-bold text-lg">{name} <br />
                    <div className="text-xs text-gray-200 text-normal">
                        Last Visited: {lastVisit}
                    </div>
                </h3>
                <div className="py-4">
                    {has}
                </div>
            </div>
            <div className="modal-action align-bottom">
                <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
  );
}

export default Modal;