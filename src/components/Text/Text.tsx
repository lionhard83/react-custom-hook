import { useContext } from "react"
import { LangContext } from "../../App"
import { languages } from "../../languages";


export const Text = () => {
    const currentLang = useContext(LangContext);
    
    return <span>{languages[currentLang].title}</span>
}