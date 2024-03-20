import { useCities } from "../../hooks/useCities"




export const Card = () => {
    const [[city],,loading] = useCities(["Caltagirone"])
    return <>{loading ? 'loading' : `${city?.name}-${city?.weather[0].description}`}</>
}