import Hero from "@/components/pages/design/Hero/Hero";
import AboutCourse from "@/components/pages/design/AbooutCourse/AbooutCourse";
import YouLearning from "@/components/pages/design/YouLearning/YouLearning";
import Courses from "@/components/common/PageCoursesList/Courses.module";
import Contact from "@/components/common/Contact/Contact";
import AboutProfession from "@/components/pages/design/AboutProfession/AboutProfession";
import Teachers from "@/components/pages/design/Teachers/Teachers";
import Program from "@/components/pages/design/Program/Program";
import Ready from "@/components/pages/design/Ready/Ready";
import HowLearn from "@/components/common/HowLearn/HowLearn";
import Diploma from "@/components/pages/design/Diploma/Diploma";
import RegisterCourse from "@/components/common/RegisterCourse/RegisterCourse";
import CourseTechnology from "@/components/pages/design/CourseTechnology/CourseTechnology";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import Faq from "@/components/common/Faq/Faq";
import NasaCourses from "@/components/common/NasaCourses/NasaCourses";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import { targets, labels } from "@/components/common/Sidebar/constants";
import s from "./style.module.scss";

export const metadata = {
  title: "Space IT | UI/UX Design",
  description: "Generated by create next app",
};

export default function Course() {
  return (
    <>
      <div className={s.railway}>
        <Sidebar targets={targets} labels={labels} />
      </div>
      <HiddenWrapper>
        <Hero />
        <Sidebar className={"min"} targets={targets} labels={labels} />
        <AboutCourse name="ui/ux design" />
        <YouLearning />
        <AboutProfession />
        <Teachers />
        <Ready />
        <Program />
        <HowLearn />
        <CourseTechnology />
        <NasaCourses />
        <Diploma />
        <RegisterCourse name="ui/ux design" />
        <Faq />
        <Courses />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
