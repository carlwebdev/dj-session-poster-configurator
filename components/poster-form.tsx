"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import type { PosterData, Room, DJ } from "@/lib/poster-data"
import { Trash2, Plus } from "lucide-react"

interface PosterFormProps {
  posterData: PosterData
  setPosterData: (data: PosterData) => void
}

export default function PosterForm({ posterData, setPosterData }: PosterFormProps) {
  const updateField = (field: keyof PosterData, value: any) => {
    setPosterData({ ...posterData, [field]: value })
  }

  const updateRoom = (index: number, field: keyof Room, value: any) => {
    const updatedRooms = [...posterData.rooms]
    updatedRooms[index] = { ...updatedRooms[index], [field]: value }
    updateField("rooms", updatedRooms)
  }

  const updateDJ = (roomIndex: number, djIndex: number, field: keyof DJ, value: string) => {
    const updatedRooms = [...posterData.rooms]
    const updatedDJs = [...updatedRooms[roomIndex].djs]
    updatedDJs[djIndex] = { ...updatedDJs[djIndex], [field]: value }
    updatedRooms[roomIndex] = { ...updatedRooms[roomIndex], djs: updatedDJs }
    updateField("rooms", updatedRooms)
  }

  const addRoom = () => {
    updateField("rooms", [
      ...posterData.rooms,
      { name: `Room ${posterData.rooms.length + 1}`, djs: [{ name: "DJ Name", time: "00:00 - 00:00" }] },
    ])
  }

  const removeRoom = (index: number) => {
    const updatedRooms = posterData.rooms.filter((_, i) => i !== index)
    updateField("rooms", updatedRooms)
  }

  const addDJ = (roomIndex: number) => {
    const updatedRooms = [...posterData.rooms]
    updatedRooms[roomIndex].djs.push({ name: "New DJ", time: "00:00 - 00:00" })
    updateField("rooms", updatedRooms)
  }

  const removeDJ = (roomIndex: number, djIndex: number) => {
    const updatedRooms = [...posterData.rooms]
    updatedRooms[roomIndex].djs = updatedRooms[roomIndex].djs.filter((_, i) => i !== djIndex)
    updateField("rooms", updatedRooms)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Event Details</h2>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              value={posterData.eventName}
              onChange={(e) => updateField("eventName", e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" value={posterData.date} onChange={(e) => updateField("date", e.target.value)} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="venue">Venue</Label>
            <Input id="venue" value={posterData.venue} onChange={(e) => updateField("venue", e.target.value)} />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Rooms & DJs</h2>
          <Button onClick={addRoom} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Room
          </Button>
        </div>

        {posterData.rooms.map((room, roomIndex) => (
          <div key={roomIndex} className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="grid gap-2 flex-1">
                <Label htmlFor={`room-${roomIndex}`}>Room Name</Label>
                <Input
                  id={`room-${roomIndex}`}
                  value={room.name}
                  onChange={(e) => updateRoom(roomIndex, "name", e.target.value)}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 text-destructive"
                onClick={() => removeRoom(roomIndex)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">DJs</h3>
                <Button onClick={() => addDJ(roomIndex)} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add DJ
                </Button>
              </div>

              {room.djs.map((dj, djIndex) => (
                <div key={djIndex} className="flex gap-2 items-end">
                  <div className="grid gap-2 flex-1">
                    <Label htmlFor={`dj-${roomIndex}-${djIndex}`}>DJ Name</Label>
                    <Input
                      id={`dj-${roomIndex}-${djIndex}`}
                      value={dj.name}
                      onChange={(e) => updateDJ(roomIndex, djIndex, "name", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 flex-1">
                    <Label htmlFor={`time-${roomIndex}-${djIndex}`}>Time Slot</Label>
                    <Input
                      id={`time-${roomIndex}-${djIndex}`}
                      value={dj.time || ""}
                      onChange={(e) => updateDJ(roomIndex, djIndex, "time", e.target.value)}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive"
                    onClick={() => removeDJ(roomIndex, djIndex)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
