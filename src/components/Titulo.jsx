import Arrow from '../assets/img/arrow.png'
const Titulo = ({ texto }) => {
    return (
        <div className="titulo">
            <img src={Arrow} alt="flecha" />
            <h2>{texto} </h2>
        </div>
    )
}

export default Titulo;