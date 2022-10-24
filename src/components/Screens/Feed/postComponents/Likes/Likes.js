import "../../Posts/Posts.css"

export function Likes (props) {
    return (
        <section className='likes'>
            <span>Curtido por {props.qnt_likes}</span>
        </section>
    )
}