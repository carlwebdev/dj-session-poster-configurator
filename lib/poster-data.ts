export interface DJ {
  name: string
  time?: string
}

export interface Room {
  name: string
  djs: DJ[]
}

export interface PosterData {
  eventName: string
  date: string
  venue: string
  rooms: Room[]
}

export const defaultPosterData: PosterData = {
  eventName: "NIGHT SESSION",
  date: "Saturday, May 25, 2025",
  venue: "The Underground Club",
  rooms: [
    {
      name: "Main Room",
      djs: [
        { name: "DJ Pulse", time: "22:00 - 23:30" },
        { name: "Electra Beats", time: "23:30 - 01:00" },
        { name: "Sonic Wave", time: "01:00 - 03:00" },
      ],
    },
    {
      name: "Techno Cave",
      djs: [
        { name: "Bass Master", time: "22:30 - 00:00" },
        { name: "Rhythm Junkie", time: "00:00 - 02:00" },
        { name: "Deep Dive", time: "02:00 - 04:00" },
      ],
    },
    {
      name: "Chill Lounge",
      djs: [
        { name: "Ambient Flow", time: "22:00 - 00:00" },
        { name: "Sunset Vibes", time: "00:00 - 02:00" },
        { name: "Lunar Echo", time: "02:00 - 04:00" },
      ],
    },
    {
      name: "Bass Arena",
      djs: [
        { name: "Sub Zero", time: "23:00 - 01:00" },
        { name: "Frequency", time: "01:00 - 03:00" },
        { name: "Tremor", time: "03:00 - 05:00" },
      ],
    },
  ],
}
