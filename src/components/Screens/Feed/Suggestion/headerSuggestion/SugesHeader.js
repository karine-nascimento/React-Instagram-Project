import '../Suggestion.css'

export function SugesHeader(props) {
        return (
            <>
        <div className='header-suggestion'>
                <img src={props.imgsuges}/>
            

            <div className='user-infos-suggestion'>

                <div className='infos'>
                    <span>{props.arroba}</span>
                    <p>{props.sugesuser}</p>
                </div>

                <button className='switch'>Mudar</button>
            </div>
        </div>

        <div className='header-main-sugest'>
            <p>Sugestões para você</p>
            <span>Ver tudo</span>
        </div>
            </>
        )
}