import { PostHeader } from '../postComponents/PostHeader/PostHeader';
import { PostIMG } from '../postComponents/PostIMG/PostIMG'
import { Engagement } from '../postComponents/Engagement/Engagement'
import {Likes} from '../postComponents/Likes/Likes'
import { Legenda } from "../postComponents/Legenda/Legenda";
import { Time } from '../postComponents/Time/Time';
import {Comments} from '../postComponents/Comments/Comments'
import './Posts.css'
export function Posts(props) {
    return (
                
        <>
        <article className='separar'>

                            <PostHeader profile= {props.ftperfil} postuser={props.usuario} />  {/* alterável */}
                            <PostIMG imgpost={props.imagem} />   
                      
                         <div className='footer-post'>
                            <Engagement />  {/* Não alterável */}
                            <Likes qnt_likes={props.qntlikes} />       {/* alterável */}
                            <Legenda user={props.usuario} texto={props.leg} />     {/* alterável */}
                            <Time time={props.tempo}/>        {/* alterável */}
                        </div>
                    
                             <Comments />    {/* não alterável */}
                    </article>    
                    
        </>
    );
}