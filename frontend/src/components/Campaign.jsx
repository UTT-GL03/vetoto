function Campaign({id, name, aspects}) {
    return (<div className="campaign" onClick={() => window.location.href = `/sheet/${id}`}>
        <h2>{name}</h2>
        <header>
            <span> {aspects.length > 0 && aspects[0]} </span>
        </header>
    </div>)
}

export default Campaign