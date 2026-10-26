import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import reactLogo from './assets/react.svg'
import data from './assets/sample_data.json'
import './App.css'
import Campaign from "./components/Campaign.jsx";
import Sheet from "./components/Sheet.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (<>
        <BrowserRouter>
            <header>
                <h1>
                    <img src={reactLogo}/>
                    VeToTo
                </h1>
            </header>
            <Routes className="container">
                <Route
                    path="/campaign"
                    element={
                        <div className="campaign-grid">
                            {data.sheets.map((x, i) => (
                                <Campaign {...x} key={i} />
                            ))}
                        </div>
                    }
                />
                <Route path="/sheet/:sheetId" element={<Sheet/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default App
