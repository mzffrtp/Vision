import { useNavigate } from "react-router-dom"
export default function Header () {
    const navigate = useNavigate()
    return (
        <div className="bg-dark p-3 ">
            <img 
            style={{maxWidth: "7rem", cursor:"pointer"}}
            onClick={()=>navigate("/")}
            src="https://cdn.pixabay.com/photo/2016/10/04/08/58/theater-1713816_1280.jpg"/>
        </div>
    )
}