import { useState } from "react";
import { useCharacters } from "../../hooks/useGenericRMA";

export const A = () => {
    const [page, setPage] = useState(1);
    const [characters] = useCharacters(page);
    return <>
        <button onClick={() => setPage(page -1)}>Prev</button>< br />
        <button onClick={() => setPage(page +1)}>Next</button>< br />
        <span>{page}</span>

        <ul>
            {characters.map(item => <li>{item.name}</li>)}
        </ul>
    </>
}