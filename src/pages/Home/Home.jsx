import Banner from "../../components/Banner/Banner";

function Home() {
    return (
        <div className="Container_home">
            <Banner page="Inicio"/>
            <div className="Content_home">
                <h1>Home</h1>
            </div>
            <div className="Footer_home">
                <h1>Footer</h1>
            </div>
        </div>
    )

}

export default Home;