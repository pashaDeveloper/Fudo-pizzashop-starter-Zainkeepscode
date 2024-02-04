import css from '../styles/Header.module.css'
import Image from "next/image"
import logo from '../assets/logo.png'
export default function Header(){
return (
    <div className={css.header}>
        {/* {logo side} */}
        <div className={css.logo}>
           <Image src={logoo} alt="" height={50} width={50} />
        </div>
        {/* MENU SIDE */}
        <ul className="css menu">
            <li>صفحه اصلی</li>
            <li></li>
            <li></li>
        </ul>
    </div>
)
}