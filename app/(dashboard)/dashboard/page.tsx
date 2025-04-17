"use client";
import { useAuthStore } from "@/stores/useAuthStore";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  TrendingUp,
  X,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Dashboard() {
  const { user, loading, fetchUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    fetchUser();

    console.log(user);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {user && (
        <>
        <h1 className="text-3xl font-bold mb-4">Welcome back, {user.name.split(" ")[0]}!</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Jobs Saved
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">12%</span> from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Applications Submitted
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">8%</span> from last week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Interviews Scheduled
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">2</span> new this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Offers Received
                </CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                  <span className="text-green-500">1</span> new this week
                </p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="activity" className="my-4">
        <TabsList>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your job search activity from the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem
                  icon={<FileText className="h-4 w-4" />}
                  title="Application Submitted"
                  description="Senior Frontend Developer at TechCorp"
                  timestamp="Today at 10:30 AM"
                />
                <ActivityItem
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  title="Interview Completed"
                  description="UX Designer at DesignHub"
                  timestamp="Yesterday at 2:15 PM"
                />
                <ActivityItem
                  icon={<X className="h-4 w-4" />}
                  title="Application Rejected"
                  description="Product Manager at StartupXYZ"
                  timestamp="2 days ago"
                />
                <ActivityItem
                  icon={<Briefcase className="h-4 w-4" />}
                  title="Job Saved"
                  description="Full Stack Developer at WebSolutions"
                  timestamp="3 days ago"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your scheduled interviews and follow-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem
                  icon={<Clock className="h-4 w-4" />}
                  title="Technical Interview"
                  description="Senior Frontend Developer at TechCorp"
                  timestamp="Tomorrow at 11:00 AM"
                />
                <ActivityItem
                  icon={<Clock className="h-4 w-4" />}
                  title="Follow-up Call"
                  description="UX Designer at DesignHub"
                  timestamp="Friday at 3:30 PM"
                />
                <ActivityItem
                  icon={<Clock className="h-4 w-4" />}
                  title="Final Interview"
                  description="Full Stack Developer at WebSolutions"
                  timestamp="Next Monday at 10:00 AM"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
          {/* <Image src={user.image} alt="image" width={100} height={100} />
          <h1 className="text-white">Name : {user?.name}</h1>
          <h1 className="text-white">Email : {user?.email}</h1>
          <h1 className="text-white">Google ID : {user?.googleId}</h1> */}
        </>
      )}
    </div>
  );
}



function ActivityItem({
  icon,
  title,
  description,
  timestamp,
}: {
  icon: React.ReactNode
  title: string
  description: string
  timestamp: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">{icon}</div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-xs text-muted-foreground">{timestamp}</div>
    </div>
  )
}