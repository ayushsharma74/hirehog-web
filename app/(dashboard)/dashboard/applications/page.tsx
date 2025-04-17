import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, CheckCircle2, Clock, FileText, Filter, Search, X } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
        <p className="text-muted-foreground">Track and manage your job applications in one place.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search applications..." className="w-full pl-8" />
          </div>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="applied">Applied</SelectItem>
              <SelectItem value="interviewing">Interviewing</SelectItem>
              <SelectItem value="offered">Offered</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <ApplicationCard
          title="Senior Frontend Developer"
          company="TechCorp"
          date="Apr 10, 2023"
          status="interviewing"
          nextStep="Technical Interview on Apr 15, 2023"
        />
        <ApplicationCard
          title="UX Designer"
          company="DesignHub"
          date="Apr 5, 2023"
          status="applied"
          nextStep="Waiting for response"
        />
        <ApplicationCard
          title="Full Stack Developer"
          company="WebSolutions"
          date="Apr 2, 2023"
          status="offered"
          nextStep="Offer received on Apr 12, 2023"
        />
        <ApplicationCard
          title="Product Manager"
          company="StartupXYZ"
          date="Mar 28, 2023"
          status="rejected"
          nextStep="Application rejected on Apr 8, 2023"
        />
      </div>
    </div>
  )
}

function ApplicationCard({
  title,
  company,
  date,
  status,
  nextStep,
}: {
  title: string
  company: string
  date: string
  status: "applied" | "interviewing" | "offered" | "rejected"
  nextStep: string
}) {
  const statusConfig = {
    applied: {
      label: "Applied",
      color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-50",
      icon: FileText,
    },
    interviewing: {
      label: "Interviewing",
      color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-50",
      icon: Clock,
    },
    offered: {
      label: "Offered",
      color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-50",
      icon: CheckCircle2,
    },
    rejected: {
      label: "Rejected",
      color: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-50",
      icon: X,
    },
  }

  const { label, color, icon: Icon } = statusConfig[status]

  return (
    <Card>
      <CardContent className="">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 space-y-1">
            <h3 className="font-medium text-lg">{title}</h3>
            <div className="flex items-center text-muted-foreground">
              <Building2 className="h-3.5 w-3.5 mr-1" />
              {company}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              Applied: {date}
            </div>

            <Badge variant="outline" className={color}>
              <Icon className="h-3 w-3 mr-1" />
              {label}
            </Badge>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="font-medium">Next Step:</span> {nextStep}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Update
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
