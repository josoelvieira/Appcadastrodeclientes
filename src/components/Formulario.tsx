import Entrada from "./Entrada";
import Cliente from '../core/Cliente';
import { useState } from 'react';

interface FormularioProps {
    cliente: Cliente

}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ??'');
    const [idade, setIdade] = useState(props.cliente?.idade ??'');

    return(
            <div className="bg-blue-300 p-3">
                {id ? <Entrada texto="Codigo:" valor= {id} tipo="text" somenteLeitura={true}></Entrada> : false}
                

                <Entrada texto="Nome:" valor= {nome} valorMudou={setNome} tipo="text" somenteLeitura={false}></Entrada>

                <Entrada texto="Idade:" valor= {idade} valorMudou={setNome} tipo="number" somenteLeitura={false}></Entrada>

            </div>
    )
 }