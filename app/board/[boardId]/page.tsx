import { Canvas } from "@/app/board/[boardId]/_components/canvas";
import { Room } from "@/components/room";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<div>Loading...</div>}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
