"use client"

import type { PosterData } from "@/lib/poster-data"
import { Calendar, Clock, MapPin, Music } from "lucide-react"

interface PosterPreviewProps {
  posterData: PosterData
}

export default function PosterPreview({ posterData }: PosterPreviewProps) {
  const { eventName, date, venue, rooms } = posterData

  return (
    <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: "1/1.4" }}>
      {/* Poster Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-6 text-white">
        {/* Header */}
        <div className="text-center mb-8 mt-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2 uppercase">{eventName}</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="h-4 w-4" />
            <p className="text-lg">{venue}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            <p className="text-lg">{date}</p>
          </div>
        </div>

        {/* Rooms and DJs */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <Music className="h-5 w-5 text-purple-400" />
                <h2 className="text-xl font-bold text-purple-300">{room.name}</h2>
              </div>
              <div className="space-y-3 flex-1">
                {room.djs.map((dj, djIndex) => (
                  <div key={djIndex} className="flex justify-between items-center">
                    <span className="font-medium">{dj.name}</span>
                    {dj.time && (
                      <div className="flex items-center gap-1 text-sm text-gray-300">
                        <Clock className="h-3 w-3" />
                        <span>{dj.time}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-300 mb-1">Tickets available online and at the door</p>
          <p className="text-xl font-bold">www.nightsession.com</p>
        </div>
      </div>
    </div>
  )
}
