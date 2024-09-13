import { AiFillHome } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { HiCog6Tooth } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import SidebarButton from "./SidebarButtons";

const Navbar = () => {
    return (
        <nav>
            <SidebarButton image={<AiFillHome />} />
            <SidebarButton image={<AiFillMail />} />
            <SidebarButton image={<TbTruckDelivery />} />
            <SidebarButton image={<HiCog6Tooth />} />
        </nav>
    );
}
 
export default Navbar;