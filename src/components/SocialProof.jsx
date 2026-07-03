import { socialProof } from "../config/business";
import Counter from "./ui/Counter";
import "./SocialProof.css";

/** SocialProof — light gold-tinted band with four animated count-up stats. */
export default function SocialProof() {
  return (
    <section className="social-proof" aria-label="Our track record">
      <div className="container">
        <dl className="social-proof__grid">
          {socialProof.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="social-proof__stat reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <dd className="social-proof__value">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="social-proof__label">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
