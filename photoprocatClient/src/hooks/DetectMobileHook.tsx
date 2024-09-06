import React, {useEffect, useState} from "react";

const useCheckMobileScreen = (data:number=767.98,data2:number=0) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
            console.log(window.innerWidth);
            
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= data && width >= data2);
}

export default useCheckMobileScreen