import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div className="Container">
            <Banner page="Inicio"/>
            <div className="Content_home">
                <h1>Home</h1>
            </div>
            <Footer />
        </div>
    )

}

export default Home;