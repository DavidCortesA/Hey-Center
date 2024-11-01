import BodyContent from "@/components/common/BodyContent";
import SideChat from "@/components/SideChat";
import SideChatCard from "@/components/SideChatCard";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-row flex-nowrap p-5">
      <BodyContent>
        <SideChatCard/>
        <SideChat/>
      </BodyContent>
    </main>
  );
}
