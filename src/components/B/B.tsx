import { useCharacters } from "../../hooks/useGenericRMA";




export const B = () => {
    const [characters, loading] = useCharacters(1);
    return <>{loading ? 'loading' : characters.length}</>
}