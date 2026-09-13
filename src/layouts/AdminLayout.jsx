import { Outlet } from "react-router-dom"
import AdminSidebar from "./../components/AdminSidebar"
function AdminLayout (){
    return(
        <>
        <AdminSidebar/>
        <Outlet/>
        </>
    )
}
export default AdminLayout;