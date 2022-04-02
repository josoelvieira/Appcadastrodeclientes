import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from '../components/Botao';
import Formulario from "../components/Formulario";

export default function Home(props) {
    const clientes = [
        new Cliente("João", 20, "1"),
        new Cliente("Maria", 25, "2"),
        new Cliente("Pedro", 30, "3"),
    ];

    function clienteSelecionado(cliente: Cliente) {
        console.log(cliente.nome);
    }
    function clienteExcluido(cliente: Cliente) {
      console.log(cliente.nome);
  }
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-500 to-black-500 ">
            <Layout titulo="Cadastro">
              <div className="flex justify-end"><Botao>Novo cliente</Botao></div>
                <Formulario/>
                
                {/* <Tabela
                    clientes={clientes}
                    clienteSelecionado={clienteSelecionado}
                    clienteExcluido={clienteExcluido}
                ></Tabela> */}
            </Layout>
        </div>
    );
}
