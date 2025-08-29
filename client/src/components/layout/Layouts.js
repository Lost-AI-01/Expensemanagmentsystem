import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";


const Layouts = ({Children}) => {
    return(
        <>
            <Header />
            <div className="content">{Children}</div>
            <Footer />
        </>
    );
};

export default Layouts;