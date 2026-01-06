import { Button } from "@/components/ui/button"
import { toast } from "sonner"


const UserDashboard = () => {
    return (
        <div>
            UserDashboard
            <br /><br />
            <Button 
                variant="outline" 
                onClick={() => toast("Event has been created")}
            >
                Toast alert
            </Button>
        </div>
    )
}

export default UserDashboard