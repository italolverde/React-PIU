
export default function Task({nome, status}) {
    return(
        <div>
            <span>{nome}</span> 
            {status == true ? 
                <span>Status: finalizada</span> :
                <span>Status: pendente</span>    
        }
        </div>
    )
}