import React from "react"
import ReactDOM from "react-dom"
import {Routes, Route, Link, BrowserRouter} from "react-router-dom"

function FrontPage() {
    return <div>
        <h1> Kristiania Movie db </h1>
        <ul>
            <li><Link to="/movies">List Movies</Link></li>
            <li><Link to="/movies/new">New Movies</Link></li>
        </ul>
    </div>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/movies" element={<h1> List Movies </h1>} />
            <Route path="/movies/new" element={<h1> New Movie </h1>} />
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render( <Application/>, document.getElementById("app"));