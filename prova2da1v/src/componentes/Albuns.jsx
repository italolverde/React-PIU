import { useEffect, useState } from "react";

export default function Albuns() {
    const [atualizar, setAtualizar] = useState(false)
    const [valorusu, setValorusu] = useState([])
    const [id,setId] = useState() 

    useEffect(() => {
        const fetchUsuarios = async () => {
            console.log('rodou o useeffect')
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums'); 
                const data = await response.json(); 
                const filtrados = data.filter((album) => album.userId === Number(id));
                
                setValorusu(filtrados); 
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false); 
            }
        }

        fetchUsuarios();
    }, [atualizar]);

    const handlechange = (event) => {
        setId(event.target.value);
    
    };

    function handleclick () {
        setAtualizar(!atualizar)
    }

    return (
        <>
            <ul>
                <h2>albuns</h2>
            
                {valorusu.map(valorusu => (
                    <li key={valorusu.id}>{valorusu.title}</li>
                ))}
            </ul>

            <input type="number" name="id" max={10} min={0} step={1} onChange={handlechange}/> 
            <button onClick={handleclick}>Alo</button>
        </>
    )

}