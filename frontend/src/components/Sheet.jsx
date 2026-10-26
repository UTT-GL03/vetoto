import data from '../assets/sample_data.json'
import {useParams} from "react-router";

function Sheet() {
    const {sheetId} = useParams();
    const sheet = data.sheets.find(x => x.id === sheetId);

    return (<>
        <h1>{sheet.name}</h1>
        <div>
            <>Restauration : {sheet.refresh}</>
            <>Points de Destin : {sheet.fate_points}</>
        </div>
        <div>{sheet.aspects.map(aspect => (<p key={aspect}>{aspect}</p>))}</div>
        <div>Compétences : {sheet.skills.map(skill => (<span key={skill}>{skill.name} : +{skill.modifier}</span>))}</div>
        <div>{sheet.stunts.map(stunt => (
            <p key={stunt}>{stunt.name} ({stunt.skill.name}) : {stunt.description}</p>))}</div>
        //TODO add stress tracks
    </>)
}

export default Sheet;