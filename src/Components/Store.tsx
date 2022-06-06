import { useParams, useSearchParams } from "react-router-dom"

export default function Store () {
    const id = useParams().id;
    // or
    //  const {id} = useParams();
    const [searchParams] = useSearchParams();

    return <h1> This is store number: {id} and you're searching for color: {searchParams.get('color')}</h1>
}