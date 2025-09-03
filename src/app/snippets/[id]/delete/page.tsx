import db from "@/db";
import { notFound } from "next/navigation";
import SnippetDeleteForm from "../../../../components/snippet-delete-form";

interface SnippetDeletePageProps {
  params: {
    id: string;
  };
}

export default async function SnippetDeletePage(props: SnippetDeletePageProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    notFound();
  }
  return <div>
    <SnippetDeleteForm snippet={snippet} />
  </div>;
}