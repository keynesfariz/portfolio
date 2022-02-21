import { contacts } from "utilities/constants";
import ContactLink from "./ContactLink";
import ContactSection from "./ContactSection";

export default function ContactWrapper() {
  return (
    <div className="space-y-6 px-6 pt-20 leading-relaxed">
      <ContactSection title="email">
        <ContactLink href={`mailto:${contacts.email}`} capitalize={false}>
          {contacts.email}
        </ContactLink>
      </ContactSection>
      <ContactSection title="elsewhere">
        {Object.keys(contacts).map((key, i) => {
          if (key !== "email") {
            return (
              <ContactLink key={i} href={contacts[key]}>
                {key}
              </ContactLink>
            );
          } else {
            return null;
          }
        })}
      </ContactSection>
    </div>
  );
}
