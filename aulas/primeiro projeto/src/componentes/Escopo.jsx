import "./Escopo.css"

function Escopo() {
    const label = "Clique agui"
    function clique() {
        return(
            alert('iae teo')
        )
    }
    return(
        <div>
            <h2>Teste</h2>
            <button onClick={() => {console.log('aa')}}>{label}</button>
            <button onClick={clique}>Não clique agui</button>
        </div>
    )
}

export default Escopo