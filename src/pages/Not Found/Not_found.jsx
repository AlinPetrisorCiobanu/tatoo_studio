
import Banner from "../../components/Banner/Banner"
import Footer from "../../components/Footer/Footer"

const Not_found = () => {
    return(
        <div className="Container">
            <Banner page="Inicio"/>
            
                <h1>404</h1>
                <h3>La Página que buscas no existe.</h3>
            
            <Footer />
        </div>
    )
}
export default Not_found