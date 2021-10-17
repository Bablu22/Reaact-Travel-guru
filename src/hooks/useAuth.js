import { useContext } from "react"
import { authContext } from "../Componants/Context/AuthProvider"

const useAuth = () => {
    return useContext(authContext)
}
export default useAuth;