import { lazy, Suspense } from "react";
import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";

const LearnAbout = lazy(() => import("@/components/LearnAbout/LearnAbout"));

const About = () => {
  return (
    <Suspense fallback={<div />}>
      <FullScreenSection backgroundColor="#fafafe">
        <LearnAbout />
      </FullScreenSection>
    </Suspense>
  );
};

export default About;
