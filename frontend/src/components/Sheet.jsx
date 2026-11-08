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
        <h3>Aspects :</h3>
        <div>{sheet.aspects.map(aspect => (<p key={aspect}>{aspect}</p>))}</div>
        
        <h3>Compétences :</h3>
        <div className='row'> {sheet.skills.sort((a,b)=> b.modifier - a.modifier).map(skill => (<span className='sheet-box' key={skill.name}>{skill.name} : +{skill.modifier} </span>))}</div>
        
        <h3>Prouesses :</h3>
        <div>{sheet.stunts.map(stunt => (
            <p key={stunt.name}>{stunt.name} ({stunt.skill.name}) : {stunt.description}</p>
            ))}
        </div>
        
        <h3>Stress :</h3>
        <div className='row'>{sheet.stress_track.map(track =>(
            <div key={track.type}>
                    {track.type} :
                    {track.stress_box.map(box => (
                        <label key={box.size} className='sheet-box'> 
                            {box.size}
                            <input type='checkbox' readOnly checked={Boolean(box.checked)} />
                        </label>
                    ))}                  
            </div>
        ))}</div>
        <span className='sheet-box' onClick={() => window.location.href = `/campaign`}>Retour à la campagne</span>

    </>)
}

export default Sheet;