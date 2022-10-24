import { Posts } from './Posts/Posts';
import { Stories } from './Stories/Stories';
import { Suggestion } from './Suggestion/Suggestion'
import Post1 from './images/post1.jpg'
import Perfil2 from './images/perfil2.jpg'
import Post2 from './images/post2.jpg'
import Perfil1 from './images/perfil-post1.jpg'
import Post3 from './images/post3.jpg'
import Perfil3 from './images/perfil3.jpg'
import Perfil4 from './images/perfil4.jpg'
import Perfil5 from './images/perfil5.jpg'
import Post4 from './images/post4.jpg'
import Post5 from './images/post5.jpg'
import Post6 from './images/post6.jpg'

import './Layout.css'

export function Layout() {
    return (
        
        <div className="mainGrid">
            <div className="first-column" style={{gridArea: "firstColumn"}}>
                
                <div className="box">
                    <Stories />
                </div>

                <div className="" style={{margin: "15px 0 15px 0"}}>
                    <>
                    <Posts imagem= {Post1}
                           ftperfil={Perfil1}
                           usuario='onebitcode' qntlikes="22.435 pessoas" leg={ <text>😱 Quer estudar e trabalhar com programação? Essa é a sua oportunidade! 👾 <br /> <br /> Curtiu a simplificação? Deixa a sua curtida como forma de apoio.</text>}
                           tempo='MAIO 30' />
                    </>
                    <>
                    <Posts imagem={Post2}
                           ftperfil={Perfil2}
                        usuario='instituto.proa' qntlikes="483 pessoas" leg={<text>😱 Quer estudar e trabalhar com programação? Essa é a sua oportunidade! 👾 <br/> <br/> 💻 Inscrições abertas para o curso de programação do PROA. <br/> <br/> 🤓 Você pode contar com auxílio-transporte, notebook e uniforme, tudinho para você se dedicar ao curso sem problemas.
                        <br/> <br/> O PROPROFISSÃO também apoia no desenvolvimento comportamental e cultural do aluno.</text>} tempo='3 DIAS' />
                    </>
                    <>
                    <Posts imagem={Post6}
                           ftperfil={Perfil5}
                        usuario='sskah' qntlikes="57 pessoas" leg={<text>Visita incrível ao Banco PAN</text>} tempo='9H' />
                    </>
                    
                    <>
                    <Posts imagem={Post3}
                           ftperfil={Perfil3}
                        usuario='uxbrainy' qntlikes="918 pessoas" leg={<text>Sharing a design concept landing page.<br/>
                        Brain By: @arshakirpk</text>} tempo='2H' />
                    </>
                    <>
                    <Posts imagem={Post4}
                           ftperfil={Perfil4}
                        usuario='poetsglobe' qntlikes="3,410 pessoas" leg={<text>Making it to the next day. 🤍</text>} tempo='9H' />
                    </>
                    <>
                    <Posts imagem={Post5}
                           ftperfil={Perfil5}
                        usuario='sskah' qntlikes="170 pessoas" leg={<text>Living my best life 🤍</text>} tempo='9H' />
                    </>
                   
                    
                </div>
                 
            </div>  {/* fim da div first-column */}
            
            <div className="second-column" style={{gridArea: "secondColumn"}}>
                <div className="suggestion-box">
                <Suggestion />
                </div>
            </div>  {/* fim da div second-column */}
            
        </div>   /* fim da div main-grid */
    );
}