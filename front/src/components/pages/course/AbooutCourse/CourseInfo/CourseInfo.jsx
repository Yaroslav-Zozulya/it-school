import axios from "axios";
import s from "./styles.module.scss";
export default async function CourseInfo({ endpoint = "https:google.com" }) {
  const result = await axios.get(endpoint);

  const { data, numberOfLessons, format } = {
    data: "03.11.2023",
    numberOfLessons: "23 уроки",
    format: "офлайн",
  };

  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <p className={s.text}>Початок навчання</p>
        <p className={s.subText}>{data}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.text}>Кількість занять</p>
        <p className={s.subText}>{numberOfLessons}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.text}>Форма</p>
        <p className={s.subText}>{format}</p>
      </li>
    </ul>
  );
}
