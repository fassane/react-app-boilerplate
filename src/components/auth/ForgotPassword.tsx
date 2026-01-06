import { LargeButton } from "../shared/Button/Button";
import { Input } from "../shared/Input";
import AuthWrapper from "./AuthWrapper"


const ForgotPassword = () => {
    
    return (
        <AuthWrapper>
            <div className="form-wrapper">
                <form >
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-12 mb-3 input-wrapper">
                                <Input 
                                    type="email"
                                    label="Email"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="pt-3 btn-wrapper">
                            <LargeButton 
                                title="Send"
                                label="Envoyer"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    )
}

export default ForgotPassword;