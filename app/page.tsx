import BoardContainer from "@/components/BoardContainer";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-center justify-center min-h-screen py-80">
      <div className="flex items-center justify-center bg-[#0E0E10] h-[500px] rounded-2xl w-full">
        <BoardContainer />
      </div>
    </main>
  );
}
