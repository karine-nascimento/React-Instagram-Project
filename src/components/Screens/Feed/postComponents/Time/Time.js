import "../../Posts/Posts.css"
export function Time (props) {
    return (
        <div className='time-post'>
            <time>HÁ {props.time}</time>
        </div>
    )
}