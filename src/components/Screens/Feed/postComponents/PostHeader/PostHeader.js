import "../../Posts/Posts.css"
import { icons } from 'react-icons';
import { FiMoreHorizontal } from 'react-icons/fi'

export function PostHeader (props) {
    return (
        <header className='header-post'>

        <div className='infos-post'>
            <img src={props.profile}/>
            <p>{props.postuser}</p>
        </div>

        <FiMoreHorizontal />

    </header> 
    )
}