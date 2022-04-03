import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from './useTabelaOuForm';

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()
    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    
    useEffect( obtertodos, [])

    function obtertodos() {
        repo.obtertodos().then(Clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario()
    }
    function excluirCliente(cliente: Cliente) {
        console.log(`cliente excluido: ${cliente.nome}`);
    }
    function novoCliente() {
        setCliente(Cliente.vazio());
        exibirFormulario()
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obtertodos()
    }
    return {
        cliente,
        clientes,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        salvarCliente,
        excluirCliente,
        novoCliente,
        selecionarCliente,
        obtertodos
    }
}