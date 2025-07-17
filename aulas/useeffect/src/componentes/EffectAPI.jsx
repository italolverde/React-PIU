import { useState, useEffect } from 'react';

export default function EffectAPI() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [atualizar, setAtualizar] = useState(false);
    const [cadastrar, setCadastrar] = useState(false);

    const [nome,setNome] = useState(null)
    const [username,setUsername] = useState(null)
    const [cidade,setCidade] = useState(null)

    const handleChangenome = (event) => {
        setNome(event.target.value);
      };
      
      const handleChangeusername = (event) => {
        setUsername(event.target.value);
      };
      
      const handleChangecidade = (event) => {
        setCidade(event.target.value);
      };

    useEffect(() => {
        // Usamos uma função assíncrona dentro do useEffect
        const fetchUsuarios = async () => {
            console.log('rodou o useeffect')
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); //fecth faz uma requisição HTTP utilizando o método GET
                const data = await response.json(); //await faz com que a requisição aguarde os dados chegarem. O método json converte os dados para json
                setUsuarios(data); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        }

        fetchUsuarios();
    }, [atualizar]); // O array vazio garante que o efeito execute apenas uma vez

    useEffect(() => {
        const novoUsuario = {
            nome: nome,
            username: username,
            cidade: cidade
          };
        console.log('cadastrar')
        fetch('http://127.0.0.1:8000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // cabeçalho obrigatório para JSON
            },
            body: JSON.stringify(novoUsuario) // converte objeto JS para string JSON
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao cadastrar usuário");
                }
                return response.json(); // ou response.text() dependendo da resposta da API
            })
            .then(data => {
                console.log("Usuário cadastrado com sucesso", data);
            })
            .catch(error => {
                console.error("Erro:", error);
            });
        

    },[cadastrar]);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setCadastrar(!cadastrar)
        setNome(null)
        setUsername(null)
        setCidade(null)

      
      };

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ul style={{ backgroundColor: 'blue', color: 'white' }}>
                <h2>nomes</h2>
                {usuarios.map(usuario => (
                    <li key={usuario.name}>{usuario.name}</li>
                ))}
            </ul>

            <ul style={{ backgroundColor: 'green' }}>
                <h2>usernames</h2>
                {usuarios.map(usuario => (
                    <li key={usuario.name}>{usuario.username}</li>
                ))}
            </ul>

            <ul style={{ backgroundColor: 'red' }}>
                <h2>Cidades</h2>
                {usuarios.map(usuario => (
                    <li key={usuario.name}>{usuario.address.city}</li>
                ))}
            </ul>

            <button onClick={() => setAtualizar(!atualizar)}>Carregar dados</button>

            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Nome..." onChange={handleChangenome} />
                <input type="text" name="username" placeholder="username" onChange={handleChangeusername} />
                <input type="text" name="cidade" placeholder="cidade" onChange={handleChangecidade} />
                <button>Cadastrar</button>
            </form>
        </div>
    );
}