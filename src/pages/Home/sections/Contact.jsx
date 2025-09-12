import { lazy, Suspense } from "react";
import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";

const ContactInner = lazy(() => import("@/components/LearnAbout/Contact"));

const Contact = () => {
  return (
    <Suspense fallback={<div />}>
      <FullScreenSection backgroundColor="#fafafe">
        <ContactInner />
      </FullScreenSection>
    </Suspense>
  );
};

export default Contact;
