import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import EditPage from "./Containers/EditPage/EditPage";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/quotes/:category' element={<HomePage/>}/>
                <Route path='/quotes/:id/edit' element={<EditPage/>}/>
                <Route path='/add' element={<EditPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
