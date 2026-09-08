"use client";
import { useState } from "react";

export default function LoveLetter({ variant }: { variant: "romantic" | "sad" }) {
  const [open, setOpen] = useState(true);
  return (
    <section className={`letter ${variant}`}>
      <button className="letter-toggle" onClick={() => setOpen(!open)}>
        {open ? "Fold letter ✉" : "Read my letter 💌"}
      </button>
      {open && (
        <div className="letter-body">
          {variant === "romantic" ? (
            <>
              <h3>My Deeksha,</h3>
              <p>
                Five years. Five birthdays, five winters, a thousand video calls — and now one
                sky is finally bringing you home to Delhi.
              </p>
              <p>
                I counted every mile of WS 430 → EY 022 → EY 216 so you never feel alone up
                there. When EY 216 touches down at 19:20 on 13th September, I will be the one
                at Terminal 3 who waited the longest and loves you the loudest.
              </p>
              <p>
                Come home fast. Eat dal-roti, sleep in, laugh too loud. I kept a whole country
                of hugs ready for you.
              </p>
              <p className="sign">— Yours, Harshit ♥</p>
            </>
          ) : (
            <>
              <h3>My love,</h3>
              <p>
                I am already dreading 16th December, 20:55. Delhi Terminal 3 will take you
                away again on EY 217, and I will stand there pretending to be strong.
              </p>
              <p>
                Go safely — Abu Dhabi, Calgary, Edmonton. Text when you land. I will count the
                days till we do this all over again, because loving you is worth every goodbye.
              </p>
              <p>Until next time, take a piece of home with you. Leave a piece of you with me.</p>
              <p className="sign">— Harshit, who will miss you 🌙</p>
            </>
          )}
          <p className="hint">(edit this text in components/LoveLetter.tsx to write your own words)</p>
        </div>
      )}
    </section>
  );
}
