import css from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../assets/logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
export default function Header() {
  return (
    <div className={css.header}>
      {/* {logo side} */}
      <div className={css.logo}>
        <Image src={logo} alt="" height={50} width={50} />
        <span>Naab</span>
      </div>
      {/* MENU SIDE */}
      <ul className={css.menu}>
        <li>صفحه اصلی</li>
        <li>فروشگاه</li>
        <li>تماس با ما</li>
        <li>ارتباط با ما</li>
      </ul>
      {/* Right Side */}
      <div className="css rightSide">
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>1</div>
        </div>
      </div>
    </div>
  );
}
