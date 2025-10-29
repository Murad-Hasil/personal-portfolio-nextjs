import { FC } from "react";
import { sectionStyles } from "@/lib/styles";

interface SectionProps {
  title: string;
  items: string[];
}

/**
 * Reusable Section component for structured content blocks.
 * Keeps visual consistency across project pages.
 */
const Section: FC<SectionProps> = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <section className={sectionStyles.base}>
      <h2 className={sectionStyles.title}>{title}</h2>
      <ul className={sectionStyles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
