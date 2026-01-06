import { ReactNode } from "react"
import "./auth.scss";
import { NavLink, useNavigate } from "react-router-dom";


type WrapperProps = {
    children: ReactNode,
}

const AuthWrapper: React.FC<WrapperProps> = ({children}) => {
    let navigate = useNavigate();
    return (
    <div className="auth__wrapper" >
        {children}
        
    </div>
  )
}

export default AuthWrapper