import React from "react";

export default function MyContainer(props) {
    return (
        <div style={{backgroundColor: "#FAA", height: "100vh", display: "flex", flexDirection: "column"}}>
            <div style={{backgroundColor: "#F66", height: "50px", padding: "1em"}}>
                Title
            </div>
            <div style={{flexGrow: 1}}>
                {props.children}
            </div>
            <div style={{backgroundColor: "#F66", height: "50px", padding: "1em"}}>
                Footer
            </div>
        </div>);
}
