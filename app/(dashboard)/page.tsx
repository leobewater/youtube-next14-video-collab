"use client";

import { EmptyOrg } from "@/app/(dashboard)/_components/empty-org";
import { useOrganization } from "@clerk/nextjs";

export default function DashboardPage() {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : <p>Board List!</p>}
    </div>
  );
}
