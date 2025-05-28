export default function Switcher({clickfunction, tipopersonagem}) {
    return (
        <>
            {tipopersonagem == "protagonistas" ?
                <button onClick={clickfunction}>Ver Campeões</button> :
                <button onClick={clickfunction}>Ver Protagonistas</button>
            }
        </>
    )
}