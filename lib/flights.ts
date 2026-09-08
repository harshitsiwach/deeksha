export type Flight = {
  id: string;
  airline: string;
  flightNo: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  depLabel: string;
  arrLabel: string;
  depISO: string;
  arrISO: string;
  terminalDep?: string;
  terminalArr?: string;
  duration: string;
  aircraft: string;
  note?: string;
};

export const DELHI_ARRIVAL_ISO = "2026-09-13T19:20:00+05:30";
export const DELHI_FAREWELL_ISO = "2026-12-16T20:55:00+05:30";
export const FINAL_RETURN_ISO = "2026-12-17T10:56:00-07:00";

export const comingFlights: Flight[] = [
  {
    id: "ws430",
    airline: "WestJet",
    flightNo: "WS 430",
    from: "Edmonton Intl",
    fromCode: "YEG",
    to: "Toronto Pearson Intl",
    toCode: "YYZ",
    depLabel: "11 Sep 2026 • 23:25 MDT",
    arrLabel: "12 Sep 2026 • 05:10 EDT",
    depISO: "2026-09-11T23:25:00-06:00",
    arrISO: "2026-09-12T05:10:00-04:00",
    terminalArr: "Terminal 3",
    duration: "3h 45m • Non-stop",
    aircraft: "Boeing 737-800",
    note: "The first lift-off. 5 years of waiting starts moving.",
  },
  {
    id: "ey022",
    airline: "Etihad Airways",
    flightNo: "EY 022",
    from: "Toronto Pearson Intl",
    fromCode: "YYZ",
    to: "Abu Dhabi Zayed Intl",
    toCode: "AUH",
    depLabel: "12 Sep 2026 • 13:40 EDT",
    arrLabel: "13 Sep 2026 • 11:00 GST",
    depISO: "2026-09-12T13:40:00-04:00",
    arrISO: "2026-09-13T11:00:00+04:00",
    terminalDep: "Terminal 1",
    terminalArr: "Terminal A",
    duration: "13h 20m • Non-stop",
    aircraft: "Airbus A380-800",
    note: "Across oceans, closer to home with every hour.",
  },
  {
    id: "ey216",
    airline: "Etihad Airways",
    flightNo: "EY 216",
    from: "Abu Dhabi Zayed Intl",
    fromCode: "AUH",
    to: "Delhi Indira Gandhi Intl",
    toCode: "DEL",
    depLabel: "13 Sep 2026 • 14:10 GST",
    arrLabel: "13 Sep 2026 • 19:20 IST",
    depISO: "2026-09-13T14:10:00+04:00",
    arrISO: DELHI_ARRIVAL_ISO,
    terminalDep: "Terminal A",
    terminalArr: "Terminal 3",
    duration: "3h 40m • Non-stop",
    aircraft: "Airbus A350-1000",
    note: "This is the one. Harshit waiting at arrivals, heart beating.",
  },
];

export const goingFlights: Flight[] = [
  {
    id: "ey217",
    airline: "Etihad Airways",
    flightNo: "EY 217",
    from: "Delhi Indira Gandhi Intl",
    fromCode: "DEL",
    to: "Abu Dhabi Zayed Intl",
    toCode: "AUH",
    depLabel: "16 Dec 2026 • 20:55 IST",
    arrLabel: "16 Dec 2026 • 23:25 GST",
    depISO: DELHI_FAREWELL_ISO,
    arrISO: "2026-12-16T23:25:00+04:00",
    terminalDep: "Terminal 3",
    terminalArr: "Terminal A",
    duration: "4h 00m • Non-stop",
    aircraft: "Boeing 787-10",
    note: "The hardest goodbye. Don't let go till security.",
  },
  {
    id: "ey029",
    airline: "Etihad Airways",
    flightNo: "EY 029",
    from: "Abu Dhabi Zayed Intl",
    fromCode: "AUH",
    to: "Calgary Intl",
    toCode: "YYC",
    depLabel: "17 Dec 2026 • 02:25 GST",
    arrLabel: "17 Dec 2026 • 06:00 MST",
    depISO: "2026-12-17T02:25:00+04:00",
    arrISO: "2026-12-17T06:00:00-07:00",
    terminalDep: "Terminal A",
    duration: "13h 35m • Non-stop",
    aircraft: "Boeing 787-9",
    note: "Long night sky. Counting days till next time.",
  },
  {
    id: "ws3302",
    airline: "WestJet Encore",
    flightNo: "WS 3302",
    from: "Calgary Intl",
    fromCode: "YYC",
    to: "Edmonton Intl",
    toCode: "YEG",
    depLabel: "17 Dec 2026 • 09:50 MST",
    arrLabel: "17 Dec 2026 • 10:56 MST",
    depISO: "2026-12-17T09:50:00-07:00",
    arrISO: FINAL_RETURN_ISO,
    duration: "1h 06m • Non-stop",
    aircraft: "DHC-8 400",
    note: "Back to Edmonton. Home feels empty for a while.",
  },
];

export function getFlightStatus(depISO: string, arrISO: string, now = Date.now()) {
  const d = new Date(depISO).getTime();
  const a = new Date(arrISO).getTime();
  if (now < d) return "Scheduled";
  if (now >= d && now < a) return "In the air";
  return "Landed";
}
