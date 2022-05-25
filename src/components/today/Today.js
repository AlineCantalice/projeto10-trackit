import { useContext } from "react"
import UserContext from "../../contexts/UserContext"
import Footer from "../../shared/footer/Footer"
import Header from "../../shared/header/Header"

export default function Today() {

    const {user} = useContext(UserContext);

    return (
        <>
            <Header image={user.image}/>
            <h1>Eu sou o hoje</h1>
            <Footer />
        </>
    )
}