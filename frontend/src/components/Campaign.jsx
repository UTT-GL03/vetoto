import {useParams} from "react-router";
import campaignData from "../assets/sample_campaigns.json";
import sheetData from "../assets/sample_data.json";
import SheetPreview from "./SheetPreview.jsx";

function Campaign() {
    const {campaignId} = useParams();
    const campaignSheetList = sheetData.sheets.filter(x => x.campaign !== Number(campaignId));
    return (<div className="preview-grid">
        {campaignSheetList.map((x, i) => (<SheetPreview {...x} key={i}/>))}
    </div>)
}

export default Campaign;