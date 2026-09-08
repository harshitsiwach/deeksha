import Countdown from "@/components/Countdown";
import FlightCard from "@/components/FlightCard";
import TabNav from "@/components/TabNav";
import LoveLetter from "@/components/LoveLetter";
import MusicToggle from "@/components/MusicToggle";
import { RainCanvas } from "@/components/Effects";
import { goingFlights, DELHI_FAREWELL_ISO, FINAL_RETURN_ISO } from "@/lib/flights";

export default function Farewell() {
  return (
    <main className="page farewell">
      <RainCanvas />
      <div className="content">
        <TabNav active="farewell" />
        <div className="hero">
          <div className="badge">HOLD HER A LITTLE TIGHTER • 16 DEC 2026</div>
          <h1>
            Don&apos;t go yet <span className="heart">🌙</span>
          </h1>
          <p className="sub">
            Every homecoming has a goodbye. On 16th December at 20:55, Deeksha flies Delhi
            → Abu Dhabi → Calgary → Edmonton. This page is for the tears we already know
            are coming.
          </p>
          <div className="target">
            EY 217 takes off from Delhi T3 — 16 Dec 2026, 20:55 IST
            <small>Final arrival Edmonton — 17 Dec 2026, 10:56 MST</small>
          </div>
        </div>

        <Countdown
          targetISO={DELHI_FAREWELL_ISO}
          variant="sad"
          landedText="She's on her way back… 🌙"
        />

        <MusicToggle />

        <h2 className="serif">Her way back, mile by mile</h2>
        <div className="grid">
          {goingFlights.map((f) => (
            <FlightCard key={f.id} f={f} tone="blue" />
          ))}
        </div>

        <h2 className="serif">Until next time…</h2>
        <LoveLetter variant="sad" />

        <div className="footer">
          Goodbyes are just hellos we owe the future.
          <br />
          Final landing: {FINAL_RETURN_ISO} • Edmonton Intl
        </div>
      </div>
    </main>
  );
}
