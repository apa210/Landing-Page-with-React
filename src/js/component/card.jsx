import React from "react";

//create your first component
const Card = (props) => {
    return (
        <div className="card me-3" style={{width: "18rem"}}>
            <img src="data:image/png;base64,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" 
                    className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;