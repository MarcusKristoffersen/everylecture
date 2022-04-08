import React, {useState} from "react"
import ReactDOM from "react-dom"
import {Routes, Route, Link, BrowserRouter} from "react-router-dom"

const MOVIES = [
    {
        title: "The Matrix",
        plot: "A computer hacker learn from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        year: 1999
    },
    {
        title: "The Color Purple",
        plot: "A black Southern woman (Whoopi Goldberg) struggles to find her identity after suffering years of abuse from her father and others over 40 years.",
        year: 1985
    }
]

function FrontPage() {
    return <div>
        <h1> Kristiania Movie db </h1>
        <ul>
            <li><Link to="/movies">List Movies</Link></li>
            <li><Link to="/movies/new">New Movies</Link></li>
        </ul>
    </div>;
}

function ListMovies({movies}) {
    return <div>
        <h1> List Movies </h1>
            {movies.map(m =>
                <div key={m.title}>
                    <h2>{m.title} ({m.year})</h2>
                    <div>{m.plot}</div>
                </div>
            )}
    </div>;
}

function NewMovie() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        MOVIES.push({title, year, plot});
    }

    return <form onSubmit={handleSubmit}>
        <h1> New Movie </h1>
        <div>
            <label>Title: <input value={title} onChange={e => setTitle(e.target.value)} /> </label>
        </div>
        <div>
            <label>Year: <input value={year} onChange={e => setYear(e.target.value)} /> </label>
        </div>
        <div>
            <label>Plot: <textarea value={plot} onChange={e => setPlot(e.target.value)} /> </label>
        </div>
        <button>Submit</button>
        <pre>
            {JSON.stringify({title, year, plot})}
        </pre>
    </form>;
}

function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/movies" element={<ListMovies movies={MOVIES}/>} />
            <Route path="/movies/new" element={<NewMovie/>} />
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render( <Application/>, document.getElementById("app"));