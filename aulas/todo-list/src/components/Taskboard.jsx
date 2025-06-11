import Task from "./Task"
export default function Taskboard({tarefas}) {

    return (
        <>
        {tarefas.map((tarefa) => (
            <Task key={tarefa} nome={tarefa.nome} status={tarefa.finalizada} />
        ))}
        </>
    )
}