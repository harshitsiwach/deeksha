import Countdown from "@/components/Countdown";
import FlightCard from "@/components/FlightCard";
import TabNav from "@/components/TabNav";
import LoveLetter from "@/components/LoveLetter";
import MusicToggle from "@/components/MusicToggle";
import { HeartsCanvas } from "@/components/Effects";
import { comingFlights, DELHI_ARRIVAL_ISO } from "@/lib/flights";

export default function Home() {
  return (
    <main className="page home">
      <HeartsCanvas />
      <div className="content">
        <TabNav active="home" />
        <div className="hero">
          <div className="badge">AFTER 5 YEARS • SHE&apos;S COMING HOME</div>
          <h1>
            Harshit <span className="heart">♥</span> Deeksha
          </h1>
          <p className="sub">
            From Edmonton to Delhi, across Toronto and Abu Dhabi — 5 years of waiting ends
            with one landing. Count every second with me.
          </p>
          <div className="target">
            ✈ EY 216 lands at Delhi T3 — 13 Sep 2026, 19:20 IST
            <small>Indira Gandhi International Airport • Terminal 3</small>
          </div>
        </div>

        <Countdown targetISO={DELHI_ARRIVAL_ISO} variant="romantic" landedText="She's Home! 🤍" />

        <MusicToggle />

        <h2 className="serif">Her journey home 💕</h2>
        <div className="grid">
          {comingFlights.map((f) => (
            <FlightCard key={f.id} f={f} tone="warm" />
          ))}
        </div>

        <h2 className="serif">A letter for her 💌</h2>
        <LoveLetter variant="romantic" />

        <div className="footer">
          5 years of video calls → 3 flights → 1 hug at Delhi arrivals.
          <br />
          Made with love by Harshit for Deeksha.
        </div>
      </div>
    </main>
  );
}
