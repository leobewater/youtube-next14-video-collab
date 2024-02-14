"use client";

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
  const data = [];

  // search returns no results
  if (!data?.length && query.search) {
    return <EmptySearch />
  }
  
  // no favorites
  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  }
  
  // no boards
  if (!data?.length) {
    return <EmptyBoards />
  }

  return <div>{JSON.stringify(query)}</div>;
};
