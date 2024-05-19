import React from "react";

function ButtonsContainer() {
    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
    return (
        <div className="container text-center">
                {buttonNames.map((buttonName, index) => (
                    
                        <button className="m-1 btn btn-secondary col-3" style={{ height: '45px', width: '45px' }}>
                            {buttonName}
                        </button>
                
                ))}
        </div>
    );
}

export default ButtonsContainer;
