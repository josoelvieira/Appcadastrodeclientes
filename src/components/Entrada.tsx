interface EntradaProps {
    tipo?: "text" | "number" 
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return(
            <div className="flex flex-col">
                <label>
                    {props.texto}
                </label>
                <input onChange={e => props.valorMudou?.(e.target.value)}className="my-2 px-2 border-2 border-gray-400 p-2 rounded-lg focus:outline-none bg-blue-100 w-full text-black"
                type={props.tipo ?? 'text'} 
                value={props.valor} 
                readOnly={props.somenteLeitura}
                />
            </div>
    )
 }