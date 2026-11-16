import {useParams} from "react-router";
import { useState, useEffect } from 'react'
import SheetPreview from "./SheetPreview.jsx";

function Campaign() {
    const {campaignId} = useParams();
    const [sheetList, setSheetList] = useState([]);
    useEffect(()=>{
        fetch('/sample_data.json')
          .then(x => x.json())
          .then(data => {
            setSheetList(data.sheets.filter(x => x.campaign === Number(campaignId)));
          })
    },[campaignId])

    return (<div className="preview-grid">
        {sheetList.map((x, i) => (<SheetPreview {...x} key={i}/>))}
    </div>)
}

export default Campaign;