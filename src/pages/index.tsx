import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home(props) {
    const {
        cliente,
        clientes,
        novoCliente,
        selecionarCliente,
        excluirCliente,
        salvarCliente,
        tabelaVisivel,
        exibirTabela,
    } = useClientes();

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-500 to-black-500 ">
            <Layout titulo="Cadastro">
                {tabelaVisivel ? (
                    <>
                        <div className="flex justify-end">
                            <Botao onClick={novoCliente}>Novo cliente</Botao>
                        </div>
                        <Tabela
                            clientes={clientes}
                            clienteSelecionado={selecionarCliente}
                            clienteExcluido={excluirCliente}
                        ></Tabela>
                    </>
                ) : (
                    <Formulario
                        cliente={cliente}
                        clienteMudou={salvarCliente}
                        cancelado={() => exibirTabela}
                    />
                )}
            </Layout>
        </div>
    );
}
