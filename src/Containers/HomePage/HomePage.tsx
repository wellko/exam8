import React from 'react';
import SideBar from "../../Components/SideBar/SideBar";
import QuotesBlock from "../QuotesBlock/QuotesBlock";


const HomePage = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar/>
                <main className="col ps-md-2 pt-2">
                    <QuotesBlock/>
                </main>
            </div>
        </div>
    );
};


export default HomePage;