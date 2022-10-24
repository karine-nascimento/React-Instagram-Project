import "../../Posts/Posts.css"
import { LikeButton } from "../LikeButton"

export function Engagement () {
    return (

        <section className='engagement-post'>
            <div className='icons-1'>
                <div className='icons'>
                <LikeButton/>
                </div>

                <div className='icons'>
                    <svg aria-label="Comentar" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </div>

                <div className='icons'>
                    <svg aria-label="Partilhar publicação" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>   
                </div>
            </div>

                <div className='icons'>
                    <svg aria-label="Guardar" class="_ab6-" color="#262626" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                </div>
        </section> 
    )
}