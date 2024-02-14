"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

import { EmptyBoards } from "@/app/(dashboard)/_components/empty-boards";
import { EmptyFavorites } from "@/app/(dashboard)/_components/empty-favorites";
import { EmptySearch } from "@/app/(dashboard)/_components/empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return (
      <div>Loading...</div>
    )
  }

  // search returns no results
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  // no favorites
  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  // no boards
  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(data)}</div>;
};
