import { getFlightStatus, type Flight } from "@/lib/flights";

export default function FlightCard({ f, tone }: { f: Flight; tone: "warm" | "blue" }) {
  const status = getFlightStatus(f.depISO, f.arrISO);
  return (
    <article className={`flight minimal ${tone}`}>
      <div className="flight-head">
        <div className="fno">{f.flightNo}</div>
        <span className={`status s-${status.replaceAll(" ", "")}`}>{status}</span>
      </div>
      <div className="route-simple">
        <span className="city">{f.fromCode}</span>
        <span className="arrow" aria-hidden>
          {tone === "warm" ? "♥" : "✈"}
        </span>
        <span className="city">{f.toCode}</span>
      </div>
      <div className="places">
        {f.from.split(" Intl")[0]} → {f.to.split(" Intl")[0]}
      </div>
      <div className="times">
        {f.depLabel} • {f.arrLabel}
      </div>
      {f.note && <p className="note">{f.note}</p>}
    </article>
  );
}
