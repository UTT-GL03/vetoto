import {useParams} from "react-router";
import { useState, useEffect } from 'react'

function Sheet() {
    const {sheetId} = useParams();
    const [sheet, setSheet] = useState({name:'', skills: [], aspects: [], consequences: [], refresh: undefined, fate_points: '', stunts: [], stress_track: [], campaign: undefined});
    
    useEffect(()=>{
    fetch('/sample_data.json')
      .then(x => x.json())
      .then(data => {
        const dataSheet = data.sheets.find(x => x.id === sheetId);
        const skills = [];
        const aspects = [];
        const consequences = [];
        dataSheet.skills.map(skill =>{
            if(!skills[skill.modifier]){
                skills[skill.modifier] = [];
            }
            skills[skill.modifier].push({name: skill.name, description: skill.description})
        });
        dataSheet.aspects.map(value => {
            !value.consequence_slot && value.consequence_slot!==0 ? aspects.push(value) : consequences.push(value);
        });
    
        setSheet({name: dataSheet.name, refresh: dataSheet.refresh, fate_points: dataSheet.fate_points, stunts: dataSheet.stunts, stress_track: dataSheet.stress_track, skills: skills, aspects: aspects, consequences: consequences, campaign: dataSheet.campaign })
      })
    },[sheetId])

    const {name, refresh, fate_points, stunts, stress_track, skills, aspects, consequences, campaign} = sheet

    return (<>
        <h1>{name}</h1>
        <div>
            <span className='sheet-box'>Restauration : {refresh} </span>
            <span className='sheet-box'>Points de Destin : {fate_points}</span>
        </div>
        <h3>Aspects :</h3>
        <div>
            {aspects.map(aspect => (
                <p key={aspect.name}>{aspect.name}</p>
            ))}
        </div>
        
        <h3>Compétences :</h3>
        <table >
            <tbody>
                {skills.reverse().map((value, index) => (
                    <tr key={index}>
                        <td>+{skills.length - index -1}</td>
                        {value.map(skill => (
                            <td key={skill.name}>
                                <span className="table-box">
                                    {skill.name}
                                </span>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        <h3>Prouesses :</h3>
        <div>{stunts.map(stunt => (
            <p key={stunt.name}>{stunt.name} ({stunt.skill.name}) : {stunt.description}</p>
            ))}
        </div>
        
        <h3>Stress :</h3>
        <div className='row'>{stress_track.map(track =>(
            <div key={track.type}>
                    {track.type} :
                    {track.stress_box.map(box => (
                        <label key={box.size} className='sheet-box'> 
                            {box.size}
                            <input type='checkbox' readOnly checked={(box.checked && JSON.parse(box.checked))} />
                        </label>
                    ))}                  
            </div>
        ))}</div>
        <h3>Conséquences :</h3>
        <div>
            {consequences.map(consequence => (
                <p key={consequence.name}>{consequence.consequence_slot} : {consequence.name}</p>
            ))}
        </div>
        <span className='sheet-box' onClick={() => window.location.href = `/campaign/${campaign}`}>Retour à la campagne</span>

    </>)
}

export default Sheet;