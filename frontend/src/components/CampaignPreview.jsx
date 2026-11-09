function CampaignPreview({id, name, aspects}) {
    return (<div className="campaign" onClick={() => window.location.href = `/campaign/${id}`}>
        <h2>{name}</h2>
        <header>
            <span> {aspects.length > 0 && aspects[0].name} </span>
        </header>
    </div>)
}

export default CampaignPreview;