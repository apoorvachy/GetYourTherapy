import Image from "next/image";
import Header from "@/components/Header";
import Motion from "@/components/Motion";
import SplitText from "@/components/SplitText";
import BreathingPlayer from "@/components/BreathingPlayer";
import ConsultForm from "@/components/ConsultForm";
import HeadIllustration from "@/components/HeadIllustration";
import ServiceArt from "@/components/ServiceArt";
import Icon from "@/components/Icon";
import { RotatingBadge, Sparkle } from "@/components/Decor";
import { faqs, focusAreas, formats, hero, methods, practice, qualities, services, steps } from "@/content/site";

const delay = (s: number) => ({ transitionDelay: `${s}s` });
const tones = ["coral", "lavender", "butter", "navy"] as const;

export default function Home() {
  return (
    <>
      <Header />
      <Motion />

      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero__grid">
            <div className="hero__badge" data-reveal="pop" style={delay(0.7)}>
              <RotatingBadge text="FREE 15-MIN CONSULT • FREE 15-MIN CONSULT • " href="#book" size={140} />
            </div>

            <div className="hero__copy">
              <p className="eyebrow" data-reveal style={delay(0)}>
                {practice.credential} · Santa Monica, CA
              </p>
              <h1 id="hero-title" className="hero__title">
                <SplitText text={hero.h1.replace("&", "*&*").replace("Santa Monica", "Santa Monica")} delay={0.1} step={0.07} />
                <Sparkle className="hero__sparkle" size={56} />
              </h1>
              <p className="hero__sub" data-reveal style={delay(0.55)}>
                {hero.subhead}
              </p>
              <div className="hero__actions" data-reveal style={delay(0.7)}>
                <a href="#book" className="btn btn--ink btn--lg">
                  {hero.cta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <aside className="hero__left" data-reveal style={delay(0.9)}>
              <BreathingPlayer />
            </aside>

            <div className="hero__art" data-reveal="art" style={delay(0.35)}>
              <div className="hero__art-badge" data-reveal="pop" style={delay(1)}>
                <RotatingBadge text="GO AT YOUR PACE • YOU'RE SAFE HERE • " tone="coral" size={156} />
              </div>
              <HeadIllustration />
            </div>

            <aside className="hero__right" data-reveal style={delay(1)}>
              <p className="hero__hope">
                There’s always <strong>hope</strong>
                <Sparkle size={22} tone="coral" />
              </p>
              <ul className="format-chips">
                {formats.map((f, i) => (
                  <li key={f.label} className={`format-chip format-chip--${i ? "lavender" : "butter"}`}>
                    <span className="format-chip__icon">
                      <Icon name={f.icon} size={28} />
                    </span>
                    <span>
                      <strong>{f.label}</strong>
                      {f.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ───────── Trust strip ───────── */}
        <div className="strip" aria-label="Practice highlights">
          <ul className="strip__track">
            {[0, 1].map((dup) => (
              <li key={dup} aria-hidden={dup === 1}>
                <span>Licensed Clinical Psychologist</span>
                <Sparkle size={18} />
                <span>In-person in Santa Monica</span>
                <Sparkle size={18} tone="coral" />
                <span>Telehealth across California</span>
                <Sparkle size={18} tone="lavender" />
                <span>Therapy for adults</span>
                <Sparkle size={18} />
                <span>CBT · EMDR · Mindfulness · Body-based</span>
                <Sparkle size={18} tone="coral" />
              </li>
            ))}
          </ul>
        </div>

        {/* ───────── About ───────── */}
        <section id="about" className="section about" aria-labelledby="about-title">
          <div className="container about__grid">
            <div className="about__photo">
              <div className="about__frame zoom" data-zoom>
                <Image
                  src="/images/dr-maya-reynolds.jpg"
                  alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                  width={900}
                  height={1350}
                  sizes="(max-width: 960px) 92vw, 560px"
                />
              </div>
              <div className="about__tag" data-reveal="pop" style={delay(0.2)}>
                <strong>Dr. Maya Reynolds, PsyD</strong>
                <span>{practice.credential}</span>
              </div>
              <Sparkle className="about__sparkle" size={64} tone="lavender" />
            </div>

            <div className="about__text">
              <p className="eyebrow" data-reveal>
                About me
              </p>
              <h2 id="about-title" className="section-title">
                <SplitText text="Fine on the outside, *exhausted* inside?" />
              </h2>
              <p className="lead" data-reveal style={delay(0.15)}>
                I help thoughtful, high-achieving adults slow down, feel safe, and feel like themselves again.
              </p>
              <ul className="focus-grid">
                {focusAreas.map((f, i) => (
                  <li key={f.label} className={`focus focus--${f.tone}`} data-reveal style={delay(0.2 + i * 0.08)}>
                    <span className="focus__icon">
                      <Icon name={f.icon} size={26} />
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────── Services (sticky stacking cards) ───────── */}
        <section id="services" className="section services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow" data-reveal>
                Services
              </p>
              <h2 id="services-title" className="section-title">
                <SplitText text="Support that meets you *where you are*" />
              </h2>
            </div>

            <div className="service-stack">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className={`service-card service-card--${s.tone}`}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <div className="service-card__inner" data-reveal>
                    <div className="service-card__main">
                      <div className="service-card__top">
                        <div className="service-card__icon">
                          <Icon name={s.icon} size={32} />
                        </div>
                        <span className="service-card__num">0{i + 1}</span>
                      </div>
                      <h3 className="service-card__title">{s.title}</h3>
                      <p className="service-card__desc">{s.description}</p>
                      <ul className="service-card__points">
                        {s.points.map((p) => (
                          <li key={p.label}>
                            <Icon name={p.icon} size={20} />
                            {p.label}
                          </li>
                        ))}
                      </ul>
                      <a href="#book" className="btn btn--ink service-card__cta">
                        Book a free consult <span aria-hidden="true">→</span>
                      </a>
                    </div>
                    <div className="service-card__side">
                      <ServiceArt tone={s.tone} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Why work with me ───────── */}
        <section className="section qualities" aria-labelledby="qualities-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow" data-reveal>
                Why work with me
              </p>
              <h2 id="qualities-title" className="section-title">
                <SplitText text="Therapy where you feel *respected*" />
              </h2>
            </div>
            <ul className="quality-list">
              {qualities.map((q, i) => (
                <li key={q.title} className={`quality quality--${tones[i]}`} data-reveal style={delay(i * 0.1)}>
                  <span className="quality__icon">
                    <Icon name={q.icon} size={30} />
                  </span>
                  <h3>{q.title}</h3>
                  <p>{q.line}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Approach ───────── */}
        <section id="approach" className="section approach" aria-labelledby="approach-title">
          <div className="approach__stars" aria-hidden="true" />
          <div className="container">
            <div className="section-head section-head--light">
              <p className="eyebrow" data-reveal>
                My approach
              </p>
              <h2 id="approach-title" className="section-title">
                <SplitText text="Practical tools for the *mind and body*" />
              </h2>
            </div>
            <ol className="method-grid">
              {methods.map((m, i) => (
                <li key={m.abbr} className="method" data-reveal style={delay(i * 0.1)}>
                  <span className={`method__icon method__icon--${tones[i]}`}>
                    <Icon name={m.icon} size={30} />
                  </span>
                  <span className="method__abbr">{m.abbr}</span>
                  <h3>{m.name}</h3>
                  <p>{m.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── Office & Telehealth ───────── */}
        <section id="office" className="section office" aria-labelledby="office-title">
          <div className="container">
            <div className="office__head">
              <div>
                <p className="eyebrow" data-reveal>
                  The space
                </p>
                <h2 id="office-title" className="section-title">
                  <SplitText text="A calm office, *or* your own sofa" />
                </h2>
              </div>
              <div className="format-cards">
                <div className="format-card" data-reveal style={delay(0.1)}>
                  <span className="format-card__icon">
                    <Icon name="pin" size={26} />
                  </span>
                  <div>
                    <h3>In person</h3>
                    <p>
                      {practice.street}, {practice.city}
                    </p>
                  </div>
                </div>
                <div className="format-card format-card--dark" data-reveal style={delay(0.2)}>
                  <span className="format-card__icon">
                    <Icon name="video" size={26} />
                  </span>
                  <div>
                    <h3>Telehealth</h3>
                    <p>Anywhere in California</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="office__gallery">
              <div className="office__shot office__shot--a zoom" data-zoom>
                <Image
                  src="/images/office-santa-monica-1.jpg"
                  alt="Sunlit therapy office in Santa Monica with a grey sofa and armchair"
                  width={1400}
                  height={1050}
                  sizes="(max-width: 960px) 92vw, 720px"
                />
                <span className="office__caption">Natural light</span>
              </div>
              <div className="office__shot office__shot--b zoom" data-zoom>
                <Image
                  src="/images/office-santa-monica-2.jpg"
                  alt="Calm, uncluttered counseling room with plants and bookshelves"
                  width={1400}
                  height={1050}
                  sizes="(max-width: 960px) 92vw, 480px"
                />
                <span className="office__caption">Quiet & private</span>
              </div>
              <div className="office__badge" data-reveal="pop" style={delay(0.3)}>
                <RotatingBadge text="SANTA MONICA • CALIFORNIA • " tone="butter" size={120} />
              </div>
            </div>
          </div>
        </section>

        {/* ───────── How it works ───────── */}
        <section className="section steps" aria-labelledby="steps-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow" data-reveal>
                Getting started
              </p>
              <h2 id="steps-title" className="section-title">
                <SplitText text="Four *gentle* steps" />
              </h2>
            </div>
            <ol className="step-grid">
              {steps.map((s, i) => (
                <li key={s.title} className="step" data-reveal style={delay(i * 0.12)}>
                  <span className={`step__icon step__icon--${tones[i]}`}>
                    <Icon name={s.icon} size={34} />
                    <span className="step__num">{i + 1}</span>
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.line}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="section faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__intro">
              <p className="eyebrow" data-reveal>
                FAQ
              </p>
              <h2 id="faq-title" className="section-title">
                <SplitText text="Questions you might *be holding*" />
              </h2>
              <div className="faq__art" data-reveal style={delay(0.2)} aria-hidden="true">
                <span className="faq__bubble faq__bubble--a">
                  <Icon name="chat" size={34} />
                </span>
                <span className="faq__bubble faq__bubble--b">?</span>
                <Sparkle size={40} tone="butter" className="faq__sparkle" />
              </div>
            </div>
            <div className="faq__list">
              {faqs.map((f, i) => (
                <details key={f.q} className="faq-item" open={i === 0} data-reveal style={delay(i * 0.08)}>
                  <summary>
                    {f.q}
                    <span className="faq-item__icon" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Book ───────── */}
        <section id="book" className="section book" aria-labelledby="book-title">
          <div className="container">
            <div className="book__card" data-reveal>
              <div className="book__text">
                <RotatingBadge text="WE'LL GO AT YOUR PACE • AT YOUR PACE • " tone="butter" size={110} dark={false} />
                <h2 id="book-title" className="section-title">
                  <SplitText text="Ready to feel like *yourself* again?" />
                </h2>
                <ul className="book__perks">
                  <li>
                    <Icon name="calendar" size={22} /> Free 15-minute call
                  </li>
                  <li>
                    <Icon name="shield" size={22} /> No pressure, no obligation
                  </li>
                  <li>
                    <Icon name="video" size={22} /> In person or online
                  </li>
                </ul>
              </div>
              <ConsultForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <p className="footer__brand">Dr. Maya Reynolds, PsyD</p>
            <p>Therapy for anxiety, trauma & burnout in Santa Monica and across California.</p>
          </div>
          <nav aria-label="Footer">
            <h2>Explore</h2>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#book">Book a consult</a></li>
            </ul>
          </nav>
          <div>
            <h2>Visit</h2>
            <address>
              {practice.street}
              <br />
              {practice.city}, {practice.region} {practice.postalCode}
            </address>
            <p>Telehealth across California</p>
          </div>
          <div className="footer__crisis">
            <h2>In crisis?</h2>
            <p>
              Not for emergencies. Call <strong>911</strong>, or call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline.
            </p>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© 2026 Dr. Maya Reynolds, PsyD. Fictional therapist profile created for an internship assignment.</p>
        </div>
      </footer>
    </>
  );
}
