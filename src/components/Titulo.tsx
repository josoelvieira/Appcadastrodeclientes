export default function Titulo(props) {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="px-6 py-2">{props.children}</h1>
            <hr className="border-2 border-blue-500 bg-blue-500"/>
        </div>
)
}