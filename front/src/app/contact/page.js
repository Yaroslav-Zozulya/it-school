import Contact from "@/components/pages/home/Contact/Contact";
import TopDecor from "@/components/common/TopDecor/TopDecor";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import Contacts from "@/components/pages/contact/Contacts/Contacts";
import Map from "@/components/pages/contact/Contacts/Map/Map";

export const metadata = {
  title: "Space IT | Контакти",
  description: "Generated by create next app",
};
export default function ContactUs() {
  return (
    <>
      <TopDecor ellipseClass="contacts_page" bgClass="contacts_page_bg" />
      <HiddenWrapper>
        <Contacts />
        <Map />
        <Contact />
      </HiddenWrapper>
    </>
  );
}