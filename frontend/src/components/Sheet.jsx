import data from '../assets/sample_data.json'
import {useParams} from "react-router";

function Sheet() {
    const {sheetId} = useParams();
    const sheet = data.sheets.find(x => x.id === sheetId);
    const skills = [];
    const aspects = [];
    const consequences = [];
    sheet.skills.map(skill =>{
        if(!skills[skill.modifier]){
            skills[skill.modifier] = [];
        }
        skills[skill.modifier].push({name: skill.name, description: skill.description})
    });
    sheet.aspects.map(value => {
        !value.consequence_slot && value.consequence_slot!==0 ? aspects.push(value) : consequences.push(value);
    });

    return (<>
        <h1>{sheet.name}</h1>
        <div>
            <span className='sheet-box'>Restauration : {sheet.refresh} </span>
            <span className='sheet-box'>Points de Destin : {sheet.fate_points}</span>
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
        <span className='sheet-box' onClick={() => window.location.href = `/campaign/${sheet.campaign}`}>Retour à la campagne</span>

    </>)
}

export default Sheet;