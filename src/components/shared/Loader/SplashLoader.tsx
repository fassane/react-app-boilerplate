import "./Loader.scss";
import Logo from "/logo.png";


const SplashLoader = () => {
    return (
        <div className="splash__loader">
            <div className="logo_wrapper">
                <img 
                    src={Logo} 
                    alt="Logo" 
                />
                {/* <p className="mt-3">Chargement...</p> */}
            </div>
        </div>
    );
}

export default SplashLoader;