import "./Home.scss";
import Banner from './Banner/Banner';
import { Container } from 'react-bootstrap';
import DecorTitle from '../../shared/DecorTitle';
import Products from "./Products";
import { Button } from "@/components/ui/button";


const Home = () => {
    return (
        <>
            <Banner />
            <Container>
                <div className="page_section shops">
                    <DecorTitle 
                        title="Les boutiques"
                        more="Boutiques dominantes de la plateforme"
                    />

                </div>
                <div className="page_section products">
                    <DecorTitle 
                        title="Produits"
                        more="Produits populaires"
                    />
                    <Products />

                </div>
            </Container>
        </>
    )
}

export default Home;