import { getFlightStatus, type Flight } from "@/lib/flights";

export default function FlightCard({ f, tone }: { f: Flight; tone: "warm" | "blue" }) {
  const status = getFlightStatus(f.depISO, f.arrISO);
  return (
    <article className={`flight ${tone}`}>
      <div className="flight-head">
        <div>
          <div className="airline">{f.airline}</div>
          <div className="fno">{f.flightNo}</div>
        </div>
        <span className={`status s-${status.replaceAll(" ", "")}`}>{status}</span>
      </div>
      <div className="route">
        <div className="airport">
          <span className="code">{f.fromCode}</span>
          <span className="name">{f.from}</span>
          <span className="time">{f.depLabel}</span>
          {f.terminalDep && <span className="term">{f.terminalDep}</span>}
        </div>
        <div className="mid">
          <span className="plane">✈</span>
          <span className="dur">{f.duration}</span>
        </div>
        <div className="airport right">
          <span className="code">{f.toCode}</span>
          <span className="name">{f.to}</span>
          <span className="time">{f.arrLabel}</span>
          {f.terminalArr && <span className="term">{f.terminalArr}</span>}
        </div>
      </div>
      <div className="meta">
        <span>{f.aircraft}</span> • <span>Veg Hindu meal</span>
      </div>
      {f.note && <p className="note">{f.note}</p>}
    </article>
  );
}
