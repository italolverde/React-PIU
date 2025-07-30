import { useEffect, useState } from "react";

export default function Dados() {

    const [id,setId] = useState()
    const [usuario,setUsuario] = useState([])
    const [atualizar,setAtualizar] = useState(false)
    const [data,setData] = useState([])



    useEffect(() => {
        
        const fetchUsuarios = async () => {
            console.log('rodou o useeffect')
            console.log('aaaaaaaaaa')

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
                const data = await response.json();
                const usuarioespecifico = data.filter((usuario) => usuario.id === Number(id));
                console.log('usuario especifico:')
                console.log(usuarioespecifico)
                setData(data);
            
                
            } catch (error) {
                console.error("Deu erro mano", error);
            }
        }

        fetchUsuarios();
    }, [atualizar]);

    const handleChangeId = (event) => {
        setId(event.target.value)
    }

    function handleClickAtt() {
        setAtualizar(!atualizar) 
        setUsuario(data[id-1])
        console.log('usuario de dentro do handleClick')
        console.log(data[id-1])
        console.log('name do usuario de dentro do handleclick:')
        console.log(data[id-1].name)
    }

    return (
        <>
            <input type="number" max={10} min={1} onChange={handleChangeId}/>
            <button onClick={handleClickAtt} >Atualizar</button>

            {/* {data ? <p>{data[id-1].name}</p> : <p>nada selecionado</p>} */}
            <h3>desisti de tentar mostrar aqui, começou a dar erro e não consigo mais exibir</h3>
            <h4>ta tudo sendo mostrado nos console.log, mas simplesmente da erro quando tento acessar por aqui no html</h4>
            
            
        </>
    )
}