"use client";

import { Id } from "@/convex/_generated/dataModel";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentIdPage = ({
  params
}: DocumentIdPageProps) => {


  return (
    <div className="pb-40">
      Document Id
    </div>
   );
}

export default DocumentIdPage;