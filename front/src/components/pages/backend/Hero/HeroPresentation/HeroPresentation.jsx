import Image from "next/image";
import s from "./heroPresentation.module.scss";

export default function HeroPresentation() {
  return (
    <div className={s.hero_presentation}>
      <ul className={s.present_list}>
        <li className={s.present_item}>
          <Image
            src="/pages/back-end/hero/hero-1.png"
            width={324}
            height={489}
            alt="hero course presentation picture"
          />
        </li>
        <li className={s.present_item}>
          <Image
            src="/pages/back-end/hero/hero-2.png"
            width={324}
            height={489}
            alt="hero course presentation picture"
          />
        </li>
        <li className={s.present_item}>
          <Image
            src="/pages/back-end/hero/hero-3.png"
            width={272}
            height={347}
            alt="hero course presentation picture"
          />
        </li>
      </ul>
      <ul className={s.present_description_list}>
        <li className={s.present_description_item}>
          <svg className={s.present_icon} width={20} height={20}>
            <use href="/icons/sprite.svg#icon-star"></use>
          </svg>
          <span className={s.description_text}>ПРОЕКТ ТА ПОРТФОЛІО</span>
        </li>
        <li className={s.present_description_item}>
          <svg className={s.present_icon} width={20} height={20}>
            <use href="/icons/sprite.svg#icon-star"></use>
          </svg>
          <span className={s.description_text}>ТРИВАЛІСТЬ КУРСУ 4 МІСЯЦІ</span>
        </li>
        <li className={s.present_description_item}>
          <svg className={s.present_icon} width={20} height={20}>
            <use href="/icons/sprite.svg#icon-star"></use>
          </svg>
          <span className={s.description_text}>ПЕРЕВІРКА ДОМАШНІХ ЗАВДАНЬ</span>
        </li>
        <li className={s.present_description_item}>
          <svg className={s.present_icon} width={20} height={20}>
            <use href="/icons/sprite.svg#icon-star"></use>
          </svg>
          <span className={s.description_text}>ГАРАНТІЯ ПРАЦЕВЛАШТУВАННЯ</span>
        </li>
      </ul>
    </div>
  );
}
