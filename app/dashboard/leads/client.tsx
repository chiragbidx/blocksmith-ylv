"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeadsClient() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Leads</CardTitle>
          <CardDescription>
            View and manage all your leads in one place.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="text-center py-12">
        <p className="text-lg mb-3 text-muted-foreground">You haven’t added any leads yet.</p>
        <Button asChild size="lg">
          <Link href="#">Add Lead</Link>
        </Button>
      </div>
    </div>
  );
}