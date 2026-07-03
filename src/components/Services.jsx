import { services } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ui/ServiceCard";
import "./Services.css";

/**
 * Services — SectionHeading + one labeled sub-grid per group
 * ("Software & Development" and "Marketing & Creative").
 */
export default function Services() {
  return (
    <section id="services" className="section services" aria-label="Our services">
      <div className="container">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        {services.groups.map((group) => (
          <div key={group.label} className="services__group">
            <h3 className="services__group-label reveal">
              <span className="services__group-line" aria-hidden="true" />
              {group.label}
              <span className="services__group-line" aria-hidden="true" />
            </h3>

            <div className="services__grid">
              {group.items.map((item, i) => (
                <ServiceCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={(i % 5) * 70}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
