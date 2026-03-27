"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PipelineClient() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Sales Pipeline</CardTitle>
          <CardDescription>
            Visualize and manage deals to close sales faster.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="text-center py-12">
        <p className="text-lg mb-3 text-muted-foreground">Your pipeline is empty. Get started by adding a deal.</p>
        <Button asChild size="lg">
          <Link href="#">Add Deal</Link>
        </Button>
      </div>
    </div>
  );
}