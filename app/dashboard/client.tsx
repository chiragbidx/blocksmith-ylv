"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="space-y-8">
      <Card className="mb-8 max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl">{greeting}</CardTitle>
          <CardDescription>
            Manage your customers, track deals, and boost your sales process—all in one place with LeadFlow.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="text-center py-12">
        <p className="text-lg mb-3 text-muted-foreground">No recent activity yet. Start by adding a lead or contact.</p>
        <Button asChild size="lg">
          <Link href="/dashboard/leads">Add Lead</Link>
        </Button>
      </div>
    </div>
  );
}