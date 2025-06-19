"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PosterPreview from "@/components/poster-preview"
import PosterForm from "@/components/poster-form"
import { defaultPosterData } from "@/lib/poster-data"

export default function Home() {
  const [posterData, setPosterData] = useState(defaultPosterData)

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">DJ Session Poster Configurator</h1>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="configure">Configure</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="flex justify-center">
          <Card className="p-6 w-full max-w-3xl">
            <PosterPreview posterData={posterData} />
            <div className="mt-6 flex justify-center">
              <Button>Download Poster</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="configure">
          <Card className="p-6 w-full max-w-3xl mx-auto">
            <PosterForm posterData={posterData} setPosterData={setPosterData} />
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
