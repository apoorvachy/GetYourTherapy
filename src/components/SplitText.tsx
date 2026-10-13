import { Fragment } from "react";

// Splits a heading into words so each can blur/rise in on its own.
// Wrap words in *asterisks* to italicise them: "Support that meets you *where you are*".
export default function SplitText({ text, delay = 0, step = 0.06 }: { text: string; delay?: number; step?: number }) {
  let italic = false;
  const words = text.split(" ").map((raw) => {
    const opens = raw.startsWith("*");
    const closes = raw.endsWith("*");
    if (opens) italic = true;
    const word = raw.replace(/\*/g, "");
    const isItalic = italic;
    if (closes) italic = false;
    return { word, isItalic };
  });

  return (
    <span className="split" data-split>
      {words.map(({ word, isItalic }, i) => (
        <Fragment key={i}>
          <span className="split__w" style={{ transitionDelay: `${delay + i * step}s`, animationDelay: `${delay + i * step}s` }}>
            {isItalic ? <em>{word}</em> : word}
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
