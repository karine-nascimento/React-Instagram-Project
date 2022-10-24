import { MainSugest } from './headerSuggestion/MainSugest'
import './Suggestion.css'
import { SugesHeader } from './headerSuggestion/SugesHeader'
import { FooterSuggest } from './headerSuggestion/FooterSuggest'
import Perfil5 from './../images/perfil5.jpg'

export function Suggestion() {

        return (
            <>
            <div className='suges-size'>
            <SugesHeader  imgsuges={Perfil5} sugesuser='Karine Nascimento' arroba='sskah'/>
            <MainSugest/>
            <FooterSuggest />
            </div>
            </>
        )
}