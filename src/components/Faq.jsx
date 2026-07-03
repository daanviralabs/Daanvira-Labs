import { useLayoutEffect, useRef, useState } from "react";
import { faq } from "../config/business";
import SectionHeading from "./ui/SectionHeading";
import "./Faq.css";

/**
 * Faq — accessible accordion. One item open at a time, animated max-height,
 * rotating "+" icon, proper button/aria-expanded/region semantics.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);
  const panelRefs = useRef([]);

  const toggle = (index) => setOpenIndex((current) => (current === index ? -1 : index));

  // Panel heights are measured and applied after layout, never during
  // render — reading scrollHeight mid-render can catch the DOM before the
  // answer text has reflowed, which was collapsing/clipping the open panel.
  useLayoutEffect(() => {
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      panel.style.maxHeight = i === openIndex ? `${panel.scrollHeight}px` : "0px";
    });
  }, [openIndex]);

  return (
    <section id="faq" className="section faq" aria-label="Frequently asked questions">
      <div className="container faq__container">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />

        <div className="faq__list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`faq__item${isOpen ? " faq__item--open" : ""}`}
              >
                <h3 className="faq__heading">
                  <button
                    className="faq__question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                  >
                    <span>{item.question}</span>
                    <span className="faq__plus" aria-hidden="true" />
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="faq__panel"
                  ref={(el) => (panelRefs.current[i] = el)}
                >
                  {Array.isArray(item.answer) ? (
                    <ol className="faq__answer faq__answer--steps">
                      {item.answer.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  ) : (
                    <p className="faq__answer">{item.answer}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
