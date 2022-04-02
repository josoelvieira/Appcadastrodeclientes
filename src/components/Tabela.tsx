import Cliente from '../core/Cliente';
import { IconeEdicao, IconeTrash } from './Icones';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (clientes: Cliente) => void
    clienteExcluido?: (clientes: Cliente) => void


}

export default function Tabela(props: TabelaProps ) {

    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido;
    function renderizarAcoes(clientes: Cliente) {
        
        return (
            
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (<button onClick={() => props.clienteSelecionado?.(clientes)} className='flex justify-center items-center text-green-500 hover:bg-blue-100 p-2 m-2 rounded-full'>{IconeEdicao}</button>) : false}

                {props.clienteExcluido ? (<button onClick={() => props.clienteExcluido?.(clientes)} className='flex justify-center items-center hover:bg-blue-100 p-2 m-2 rounded-full text-red-500'>{IconeTrash}</button>) : false}
            </td>
        )
    }

    function renderizarCabeçalho() {
        return (
            <tr>
                <th className='text-left p-3'>ID</th>
                <th className='text-left p-3'>Nome</th>
                <th className='text-left p-3'>Idade</th>
                {exibirAcoes ? <th className=' p-3'>Açoes</th> : false}

            </tr>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-300'}`}>
                    <td className='text-left p-3 '>{cliente.id}</td>
                    <td className='text-left p-3 '>{cliente.nome}</td>
                    <td className='text-left p-3 '>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }
    

    return(
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className='bg-gradient-to-r from-blue-500  to-blue-200'>{renderizarCabeçalho()}</thead>
            <tbody>{renderizarDados()}</tbody>
        </table>
    )
}