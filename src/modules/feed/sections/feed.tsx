"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const creators = [
  {
    name: "John Doe",
    role: "Performance Marketer | DTC & SaaS",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Sarah Lee",
    role: "Growth Marketer",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "David Kim",
    role: "Ads Specialist",
    img: "https://i.pravatar.cc/150?img=3",
  },
]

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">

      {/* Top Search */}
      <div className="mb-6">
        <input
          placeholder="Search by name, niche or platform"
          className="w-full border rounded-lg p-3 text-sm"
        />
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-3 space-y-4">

          <Card>
            <CardContent className="p-4 text-center">
              <Avatar className="mx-auto mb-3">
                <AvatarImage src="https://i.pravatar.cc/150" />
                <AvatarFallback>NX</AvatarFallback>
              </Avatar>

              <h3 className="font-semibold">Nexus Growth</h3>
              <p className="text-xs text-muted-foreground">
                Elite Performance Marketing Partner
              </p>

              <div className="flex justify-center gap-6 mt-4 text-sm">
                <div>
                  <p className="font-bold">12.4k</p>
                  <p className="text-xs">Followers</p>
                </div>
                <div>
                  <p className="font-bold">48</p>
                  <p className="text-xs">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <h4 className="font-semibold">Filters</h4>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Meta</Badge>
                <Badge variant="secondary">Google</Badge>
                <Badge variant="secondary">TikTok</Badge>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">Video</Badge>
                <Badge variant="outline">Static</Badge>
                <Badge variant="outline">Carousel</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CENTER FEED */}
        <div className="lg:col-span-6 space-y-4">

          {creators.map((user, i) => (
            <Card key={i}>
              <CardContent className="p-4 flex gap-4 items-center">

                <img
                  src={user.img}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{user.name}</h3>
                    <Badge variant="secondary">Verified</Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {user.role}
                  </p>

                  <div className="flex gap-2 mt-2 flex-wrap">
                    <Badge>ROAS 4.2</Badge>
                    <Badge>CTR 3.5%</Badge>
                    <Badge>Avg CPC ₹4.2</Badge>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline">View Profile</Button>
                    <Button className="bg-red-500 hover:bg-red-600">
                      Unlock Contact
                    </Button>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-3 space-y-4">

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">
                Top Hiring Agencies
              </h3>

              <div className="space-y-2 text-sm">
                <p>Vivid Vision</p>
                <p>Nexus Media</p>
                <p>Growth Mind</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">
                Suggested Leads
              </h3>

              <div className="space-y-3 text-sm">
                <p>Jason Miller</p>
                <p>Lisa Steiner</p>
                <p>John Carter</p>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  )
}