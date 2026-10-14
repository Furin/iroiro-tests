import { Suspense } from "react";
import QuestionsForm from "@/app/test/QuestionsForm";

export default function Page() {
  return (
    <Suspense fallback={(<p>Loading Questions...</p>)}>
      <QuestionsForm />
    </Suspense>
  );
}
