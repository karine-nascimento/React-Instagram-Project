import "../../Posts/Posts.css"

export function PostIMG (props) {
    return (
        <div className='img-post'>
        <img src={props.imgpost}/>
        </div>
    )
}