import {useState} from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router'
import reactLogo from './assets/react.svg'
import sheetData from './assets/sample_data.json'
import campaignData from './assets/sample_campaigns.json'
import './App.css'
import Sheet from "./components/Sheet.jsx";
import CampaignPreview from "./components/CampaignPreview.jsx";
import Campaign from "./components/Campaign.jsx";
import SheetPreview from "./components/SheetPreview.jsx";

function App() {

    return (<>
        <BrowserRouter>
            <header>
                <h1>
                    <img src={reactLogo}/>
                    VeToTo
                </h1>
            </header>
            <Routes className="container">
                <Route path="/" element={<Navigate to="/campaign" replace />} />
                <Route path="/campaign" element={<div className="preview-grid">
                    {campaignData.campaigns.map((x, i) => (<CampaignPreview {...x} key={i}/>))}
                </div>}/>
                <Route path="/sheet" element={<div className="preview-grid">
                    {sheetData.sheets.map((x, i) => (<SheetPreview {...x} key={i}/>))}
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
