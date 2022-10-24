import "../../Posts/Posts.css"
export function Legenda (props) {
    return (
        <div className='legend'>
        <p>
            <span className='user'>{props.user}</span>
            <span>&nbsp;</span>
            <span className='legenda'>{props.texto}</span>
        </p>
    </div> 
    )
}