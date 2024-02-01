import s from "./hero.module.scss";
import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.wrapper}>
          <div>
            <Title
              text="ПРО НАС"
              tagName={"h1"}
              className={"main_about_title"}
            />
            <Image
              src="/images/aboutHero/aboutHero.png"
              width={611}
              height={371}
              alt="Зображення команди"
              className={s.hero_image_mob}
            />
            <div className={s.description}>
              <p className="mb-4">
                Школа шо справді навчає та допомогає у працевлаштуванні. В
                рідному Житомирі та online.
              </p>
              <p className="mb-4">
                Курси: Front-end, Back-end, UI/UX, QA, PM, HR, SMM. Авторські
                програми навчання, аналогів яких немає в Україні. 80%практики +
                20% теорії, жодної води лише інформація що знадобиться вам у
                роботі.
              </p>
              <ul className="mb-4">
                <li>
                  <p>Круті лектори з досвідом 3+ років в айті</p>
                </li>
                <li>
                  <p>
                    Ментори що завжди готові прийти на допомогу, та відповісти
                    на будь які питання
                  </p>
                </li>
                <li>
                  <p>Безкоштовний IT English</p>
                </li>
                <li>
                  <p>Зручний графік навчання</p>
                </li>
                <li>
                  <p>Зручний графік навчання</p>
                </li>
                <li>
                  <p>
                    Затишний офіс у самому серці міста (для студентів offline)
                  </p>
                </li>
                <li>
                  <p>Можливість комбінувати (online та offline навчання)</p>
                </li>
                <li>
                  <p></p>
                </li>
                <li>
                  <p></p>
                </li>
                <li>
                  <p></p>
                </li>
              </ul>
              <h3 className="mb-2">Допомога у працевлаштуванні:</h3>
              <ul className="list-disc mb-4 pl-5">
                <li>
                  <p>
                    Створете конкурентне резюме під керівництвом досвідченого HR
                  </p>
                </li>
                <li>
                  <p>
                    Тренувальні співбесіди, тож надалі вони не будуть чимось
                    новиим та лячним
                  </p>
                </li>
                <li>
                  <p>
                    Знайомство з потужними спеціальними платформами для пошуку
                    роботи саме для айтівців
                  </p>
                </li>
                <li>
                  <p>
                    Наші hr допоможуть розібратись в вакансіях, підібрати
                    ідеальну саме тебе, напишете разом супроводжувальне письмо
                  </p>
                </li>
              </ul>
              <p>
                Отримаєте постійну підтримку від HR та викладача аж до першого
                робочого дня 😉
              </p>
            </div>
          </div>
          <Image
            src="/images/aboutHero/aboutHero.png"
            width={611}
            height={371}
            alt="Зображення команди"
            className={s.hero_image}
          />
        </div>
      </Container>
    </section>
  );
}
