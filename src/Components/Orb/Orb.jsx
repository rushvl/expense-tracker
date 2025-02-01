import React from "react";
import "../../styles/Orb.css";
import { useWindowSize } from "../../utils/useWindowSize";

function Orb() {
    const { width, height } = useWindowSize();
    return (<div className="orb" style={{ "--width": `${width}px`, "--height": `${height / 2}px` }}></div>);
}

export default Orb;