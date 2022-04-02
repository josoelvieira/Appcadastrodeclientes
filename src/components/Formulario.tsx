import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente;
    clienteMudou?: (cliente: Cliente) => void;
    cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? "");
    const [idade, setIdade] = useState(props.cliente?.idade ?? "");

    return (
        <div className="bg-blue-300 p-3 rounded-md">
            {id ? (
                <Entrada
                    texto="Codigo:"
                    valor={id}
                    tipo="text"
                    somenteLeitura={true}
                ></Entrada>
            ) : (
                false
            )}

            <Entrada
                texto="Nome:"
                valor={nome}
                valorMudou={setNome}
                tipo="text"
            ></Entrada>

            <Entrada
                texto="Idade:"
                valor={idade}
                valorMudou={setIdade}
                tipo="number"
                somenteLeitura={false}
            ></Entrada>
            <div className="flex justify-end">
                <Botao
                    onClick={() =>
                        props.clienteMudou?.(new Cliente(nome, +idade, id))
                    }
                >
                    {id ? "Atualizar" : "Salvar"}
                </Botao>
                <span className="ml-2">
                    <Botao onClick={props.cancelado}>Cancelar</Botao>
                </span>
            </div>
        </div>
    );
}
