import './UserStory.css'

export function UserStory(props) {
    return (

           <div className='user-elements'>

                <div>
                     <img className='image-user-stories' src={props.imgsrc} /> 
                </div>
                
                <span>{props.user}</span>

           </div>
      ) 
 } 