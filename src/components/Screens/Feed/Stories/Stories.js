import { UserStory } from '../UserStory/UserStory';
import './Stories.css'
import Perfil2 from './../images/perfil2.jpg'
import Perfil3 from './../images/perfil3.jpg'
import Perfil4 from './../images/perfil4.jpg'
import Perfil5 from './../images/perfil5.jpg'
import Perfil7 from './../images/perfil7.jpg'
import Perfil1 from './../images/perfil-post1.jpg'
export function Stories() {
    return (
        <div className="container-story">
    
          <UserStory user='sskah' imgsrc={Perfil5}/>
          <UserStory user='poetsglobe' imgsrc={Perfil4}/>
          <UserStory user='uxbrainy' imgsrc={Perfil3}/>
          <UserStory user='instituto.proa' imgsrc={Perfil2}/>
          <UserStory user='onebitcode' imgsrc={Perfil1}/>
          <UserStory user='paramore' imgsrc={Perfil7}/>

        </div>
    );
}