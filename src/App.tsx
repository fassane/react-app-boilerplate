import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AppRoutes } from "./routes/router";
import { Toaster } from "@/components/ui/sonner"



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
            <Toaster />
        </div>
    )

};

export default App;