import FeedTemplate from "@/modules/feed/templates";
import { Suspense } from "react";

export default function FeedPage() {
  return (
    <Suspense fallback={null}>
      <FeedTemplate />
    </Suspense>
  );
}