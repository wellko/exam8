import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import QuotesBlock from "./Components/QuotesBlock/QuotesBlock";
import Form from "./Components/Form/Form";
import HomePage from "./Containers/HomePage/HomePage";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}>
                    <Route path='/quotes/:category' element={<QuotesBlock/>}/>
                </Route>
                <Route path='/quotes/:id/edit' element={<Form/>}/>
                <Route path='/add' element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;
