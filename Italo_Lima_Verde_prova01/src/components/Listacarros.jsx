import { carros } from "./dados_carro"
// Importando a lista de carros do arquivo 
export default function Listacarros() {
    return (
        <>
            <h2>Lista de todos os carros:</h2>
            {/*(array.map(variavel temporaria) => (ações))*/}
            {carros.map((carro) => (
                <p>Modelo: {carro.modelo} || Ano: {carro.ano}</p>
            )) }

            <h2>Carros de ano depois de 2019.</h2>
            {/* Mesmo map, mas, ao inves de fornecer a lista inteira, dou apenas os que satisfazem
            a condicional "carro.ano > 2019" pela função filter que ela sim pega a lista completa*/}
            {carros.filter((carro) => carro.ano > 2019).map((carro) => (
                <p>Modelo: {carro.modelo} || Ano: {carro.ano}</p>
                
            ))}
        </>
    )
}