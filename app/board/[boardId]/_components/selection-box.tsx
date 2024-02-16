"use client";

import { memo } from "react";

interface SelectionBoxProps {
  onResizeHandlePointerDown: () => void;
}

export const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    return <div>selection</div>;
  }
);

SelectionBox.displayName = "SelectionBox";
