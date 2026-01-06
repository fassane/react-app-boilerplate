import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const NotFound: React.FC = () => {
    let navigate = useNavigate();
    return (
        <div className="not_found__page">
            {/* <Header /> */}
            <div style={{ padding: '12rem 0' }}>
                <Container>
                    <h3>Page non trouvée</h3>
                    <div className="btn-wrapper">
                        <button
                            className="btn"
                            onClick={() => navigate(-1)}
                        >
                            Retour
                        </button>
                    </div>
                </Container>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default NotFound;