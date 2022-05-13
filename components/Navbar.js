import Image from "next/image";
import style from '../styles/Navbar.module.css'
import logo from '../public/img/logo.png'
const Navbar = () => {
    return ( 
        <div className={style.nav} >
            <Image src={logo} className={style.icon}/>
            <button className={style.navbtn} >GET STARTED</button>
        </div>
     );
}
 
export default Navbar;