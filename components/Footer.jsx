import{UilInstagram,UilFaceBook,UilTelegram,UilWhatsApp} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'
export default function Footer() {
  return (
    <div className={css.container}>
      <span>تمامی حقوق این اثر متعلق به گروه سامان می باشد</span>
      <div className={css.social}>
        <UilFaceBook />
        <UilTelegram />
        <UilWhatsApp />
        <UilInstagram />
      </div>
    </div>
  );
}
