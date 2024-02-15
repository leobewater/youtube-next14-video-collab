import { useOther } from "@/liveblocks.config";
import { connect } from "http2";
import { userAgent } from "next/server";
import { memo } from "react";

interface CursorProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (use) => user.presence.cursor);

  const name = info?.name || "Teammate";

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return <p></p>;
});

Cursor.displayName = "Cursor";
