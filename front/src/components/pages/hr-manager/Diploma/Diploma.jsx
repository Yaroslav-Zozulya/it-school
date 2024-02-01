import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./diploma.module.scss";
import Image from "next/image";
import Title from "@/components/common/Title/Title";
export default function Diploma() {
  return (
    <section className={s.diploma} id="work">
      <CourseContainer>
        <div className={s.cont}>
          <Title
            text="ЗАКІНЧИВШИ КУРС ВИ ОТРИМАЄТЕ ДИПЛОМ, ЯКИЙ МОЖНА РОЗМІСТИТИ НА LINKEDIN"
            className="diploma_title"
            tagName="h2"
          />
          <div className={s.diploma_thumb}>
            <Image
              src="/images/diploma/diploma.png"
              className={s.dipImage}
              width={352}
              height={473}
              alt="image diploma"
            />
            <div className={s.info_thumb}>
              <Title
                text="ЗАКІНЧИВШИ КУРС ВИ ОТРИМАЄТЕ ДИПЛОМ, ЯКИЙ МОЖНА РОЗМІСТИТИ НА LINKEDIN"
                className="diploma_title_bottom"
                tagName="h2"
              />
              <div className={s.position_wrapper}>
                <div className={s.position}>
                  <h3 className={s.diploma_info_titles}>Позиція</h3>
                  <p className={s.position_param}>Junior HR Manager</p>
                </div>
                <div className={s.salary}>
                  <h3 className={s.diploma_info_titles}>Зарплата від</h3>
                  <p className={s.position_param}>$500</p>
                </div>
              </div>
              <div className={s.prof_skill}>
                <h3 className={s.diploma_info_titles}>Професійні навички</h3>
                <ul className={s.skills_list}>
                  <li className={s.skills_item}>
                    <span className={s.light}>HR-стратегія</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Найм та відбір персоналу</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>
                      Управління взаємовідносинами та корпоративною культурою
                    </span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>
                      Талант-менеджмент та розвиток персоналу
                    </span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>
                      Трудове законодавство та компліанс
                    </span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Комунікаційні навички</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Конфліктологія</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Аналітика та звітність</span>
                  </li>
                </ul>
              </div>
              <div className={s.possibilities}>
                <h3 className={s.posibil_title}>Можливості</h3>
                <div className={s.possibilities_thumb}>
                  <svg width={40} height={40} className={s.icon_linkedin}>
                    <use href="/icons/sprite.svg#icon-linkedin"></use>
                  </svg>
                  <p className={s.possibilities_text}>
                    Ви зможете додати Ваш диплом до свого облікового запису
                    Linkedin з офіційним результатом підтвердженим SPACEIT
                    School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseContainer>
    </section>
  );
}
