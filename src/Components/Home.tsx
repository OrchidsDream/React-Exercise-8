import { useNavigate } from "react-router-dom"

export default function Home () {
    const navigate = useNavigate();
    return(
        <div>
            <h2> This is the Home Page</h2>
            <div onClick = {() => {navigate('/about')}}>go to about</div>
        </div>
    )
}