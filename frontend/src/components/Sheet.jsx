import data from '../assets/sample_data.json'
import {useParams} from "react-router";

function Sheet() {
    const {sheetId} = useParams();
    const sheet = data.sheets.find(x => x.id === sheetId);


    return (<>
        <h1>{sheet.name}</h1>
        <div>
            <span className='sheet-box'>Restauration : {sheet.refresh} </span>
            <span className='sheet-box'>Points de Destin : {sheet.fate_points}</span>
        </div>
        <div>{sheet.aspects.map(aspect => (<p key={aspect}>{aspect}</p>))}</div>
        <div className='skills'>Compétences : {sheet.skills.sort((a,b)=> b.modifier - a.modifier).map(skill => (<span className='sheet-box' key={skill.name}>{skill.name} : +{skill.modifier} </span>))}</div>
        <div>{sheet.stunts.map(stunt => (
            <p key={stunt.name}>{stunt.name} ({stunt.skill.name}) : {stunt.description}</p>))}</div>
        //TODO add stress tracks
    </>)
}

export default Sheet;