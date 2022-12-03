import React from 'react';
import SideBar from "../../Components/SideBar/SideBar";
import QuotesBlock from "../QuotesBlock/QuotesBlock";
import {useParams} from "react-router-dom";


const HomePage = () => {

    const id = useParams().category

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar/>
                <main className="col ps-md-2 pt-2">
                    <h1> {id? id : 'All'}</h1>
                    <QuotesBlock/>
                </main>
            </div>
        </div>
    );
};


export default HomePage;