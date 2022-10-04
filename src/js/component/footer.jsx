import React from "react";

//create your first component
const Footer = () => {
    return (
        <footer className="text-center text-white" style={{background: "#f1f1f1"}}>
            <div className="text-center text-dark p-3" style={{background: "rgba(0, 0, 0, 0.2)"}}>
            Copyright © Your Website 2022 
            </div>
        </footer>
    );
};

export default Footer;