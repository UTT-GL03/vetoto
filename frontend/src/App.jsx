import { useState, useEffect } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router'
import reactLogo from './assets/react.svg'
import './App.css'
import Sheet from "./components/Sheet.jsx";
import CampaignPreview from "./components/CampaignPreview.jsx";
import Campaign from "./components/Campaign.jsx";
import SheetPreview from "./components/SheetPreview.jsx";

function App() {
    const [sheetList, setSheetList] = useState([]);
    const [campaignList, setCampaignList] = useState([]);
    useEffect(()=>{
        fetch('/sample_data.json')
          .then(x => x.json())
          .then(data => {
            setSheetList(data.sheets);
          })
        fetch('/sample_campaigns.json')
          .then(x => x.json())
          .then(data => {
            setCampaignList(data.campaigns);
          })
    },[])

    return (<>
        <BrowserRouter>
            <header>
                <h1>
                    <img src={reactLogo} alt={"The react logo"}/>
                    VeToTo
                </h1>
            </header>
            <Routes className="container">
                <Route path="/" element={<Navigate to="/campaign" replace />} />
                <Route path="/campaign" element={<div className="preview-grid">
                    {campaignList.map((x, i) => (<CampaignPreview {...x} key={i}/>))}
                </div>}/>
                <Route path="/sheet" element={<div className="preview-grid">
                    {sheetList.map((x, i) => (<SheetPreview {...x} key={i}/>))}
                </div>}/>
                <Route
                    path="/campaign/:campaignId"
                    element={<Campaign/>}
                />
                <Route path="/sheet/:sheetId" element={<Sheet/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default App
