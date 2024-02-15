import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    //check internet connection is available or not

    const [onlineStatus, setOnlineStatus] = useState(true);
    
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

    },[]);

    //return boolean values
    return onlineStatus;
}

export default useOnlineStatus;