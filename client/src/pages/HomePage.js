import React from "react";
import Layouts from "./../components/layout/Layouts";

const HomePage = () => {
    return (
        <Layouts>
        <div className="filters">
            <div>range filter</div>
            <div>
                <button className="btn btn-primary">Add New</button>
            </div> 
        </div>
        <div className="contents">

        </div>
        </Layouts>
    )
}

export default HomePage;