import BoardContainer from "@/components/BoardContainer";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/BoardRevealCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-center justify-center min-h-screen py-80">
      <div className="flex items-center justify-center bg-[#0E0E10] h-[500px] rounded-2xl w-full">
        <BoardContainer />
      </div>

      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text=""
          revealText={
            <div className="flex flex-wrap gap-5 justify-start -translate-x-3 w-[50rem]">
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
              <div className=" h-20 w-20 bg-red-500 rounded-lg" />
            </div>
          }
        ></TextRevealCard>
      </div>
    </main>
  );
}
