import HomePage from "@/Components/HomePage";
import { TrackingProvider } from "../../Conetxt/Tracking";
export default function Home() {
  return (
    <>
      <TrackingProvider>
      <HomePage/>
      </TrackingProvider>
    </>
  );
}
