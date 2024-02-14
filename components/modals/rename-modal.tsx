"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";

export const RenameModal = () => {
  const { isOpen, onClose, initialValues } = useRenameModal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a title for this board</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
