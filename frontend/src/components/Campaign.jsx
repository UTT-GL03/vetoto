function Campaign({name, aspects}) {
    return (<>
        <h2>{name}</h2>
        <header>
            <span> {aspects.length > 0 && aspects[0]} </span>
        </header>
    </>)
}

export default Campaign