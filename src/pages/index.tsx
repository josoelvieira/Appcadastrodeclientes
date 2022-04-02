import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function Home(props) {
    const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const clientes = [
        new Cliente("João", 20, "1"),
        new Cliente("Maria", 25, "2"),
        new Cliente("Pedro", 30, "3"),
    ];

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
    function salvarCliente(cliente: Cliente) {
        console.log(cliente)
        setVisivel('tabela')
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
