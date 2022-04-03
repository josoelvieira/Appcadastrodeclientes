import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from '../core/ClienteRepositorio';
import ColecaoCliente from '../backend/db/ColecaoCliente';

export default function Home(props) {
    const repo:ClienteRepositorio = new ColecaoCliente()

    const [clientes, setClientes] = useState<Cliente[]>([]);

    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    
    useEffect( obtertodos, [])

    function obtertodos() {
        repo.obtertodos().then(Clientes => {
            setClientes(clientes)
            setVisivel('tabela')
        })
    }

    function clienteSelecionado(cliente: Cliente) {
        setCliente(cliente);
        setVisivel("form");
    }
    function clienteExcluido(cliente: Cliente) {
        console.log(`cliente excluido: ${cliente.nome}`);
    }
    function novoCliente() {
        setCliente(Cliente.vazio());
        setVisivel('form')
    }
    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obtertodos()
    }

    
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-500 to-black-500 ">
            <Layout titulo="Cadastro">
                {visivel === "tabela" ? (
                    <>
                        <div className="flex justify-end">
                            <Botao onClick={novoCliente}>
                                Novo cliente
                            </Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelecionado={clienteSelecionado}
                            clienteExcluido={clienteExcluido}
                        ></Tabela>
                    </>
                ) : (
                    <Formulario
                        cliente={cliente}
                        clienteMudou={salvarCliente}
                        cancelado={() => setVisivel("tabela")}
                    />
                )}
            </Layout>
        </div>
    );
}
