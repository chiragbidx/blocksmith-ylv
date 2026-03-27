"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactsClient() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Contacts</CardTitle>
          <CardDescription>
            Centralize and manage all your business contacts.
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="text-center py-12">
        <p className="text-lg mb-3 text-muted-foreground">No contacts found. Add your first contact.</p>
        <Button asChild size="lg">
          <Link href="#">Add Contact</Link>
        </Button>
      </div>
    </div>
  );
}