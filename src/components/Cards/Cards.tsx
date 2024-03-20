import { useCities } from "../../hooks/useCities";


export const Cards = () => {
    const [cityWeathers, ,loading] = useCities(["Catania", "Milano"]);

    return <><ul>
            {loading && "loading"}
            {!loading && cityWeathers.map(item => <li>{item.name}-{item.weather[0].description}</li>)}
        </ul></>



}
