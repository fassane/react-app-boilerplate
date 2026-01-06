import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AppRoutes } from "./routes/router";



const ScrollToTop = () => {
    let { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};


function App() {

    const routes = useRoutes(AppRoutes);

    return (
        <div className="app-wrapper">
            <ScrollToTop />
            {routes}
        </div>
    )

};

export default App;