import db from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props:SnippetShowPageProps) {

    await new Promise(resolve => setTimeout(resolve, 500));
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    notFound();
  }
  return <div>
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>{snippet?.title}</h1>
      <div>
        <Link href={`/snippets/${snippet.id}/edit`} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Edit</Link>
        <Link href={`/snippets/${snippet.id}/delete`} className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete</Link>
      </div>
    </div>
    <pre className='bg-gray-100 p-4 rounded-md'>
        <code>{snippet?.code}</code>
    </pre>
    </div>;
}