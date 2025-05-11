import { testLiveUIClient } from "@liveui/client";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-3xl underline">Welcome on the LiveUI Playground</h1>
      <p>{testLiveUIClient()}</p>
    </main>
  );
}
