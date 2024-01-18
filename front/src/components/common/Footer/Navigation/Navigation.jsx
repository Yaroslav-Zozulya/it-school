import Link from "next/link";

import { ButtonCall, ButtonMessage } from "../Buttons/Buttons";
import Title from "../../Title/Title";
import s from "./styles.module.scss";

export function Navigation() {
  return (
    <nav className={s.footerNav}>
      <div className={s.footerNavItem}>
        <Title text="курси" className={"footer-title"} />
        <ul className={s.list}>
          <li>
            <Link href="#" className={s.listLink}>
              Software Engineering
            </Link>
          </li>
          <li>
            <Link href="#" className={s.listLink}>
              Data Science
            </Link>
          </li>
          <li>
            <Link href="#" className={s.listLink}>
              UI/UX Design
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.footerNavItem}>
        <Title text="інформація" className={"footer-title"} />
        <ul className={s.list}>
          <li>
            <Link href="/about" className={s.listLink}>
              Про нас
            </Link>
          </li>
          <li>
            <Link href="/contact" className={s.listLink}>
              Контакти
            </Link>
          </li>
          <li>
            <Link href="#" className={s.listLink}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className={s.footerNavItem}>
        <Title text="додатки" className={"footer-title"} />
        <ul className={s.list}>
          <li>
            <Link href="#" className={s.listLink}>
              Терміни та умови
            </Link>
          </li>
          <li>
            <Link href="#" className={s.listLink}>
              Політика конфіденційності
            </Link>
          </li>
          <li>
            <Link href="#" className={s.listLink}>
              Повернення коштів
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${s.footerNavItem} ${s.hide}`}>
        <ButtonCall />
        <ButtonMessage />
      </div>
    </nav>
  );
}
