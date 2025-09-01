import db from '@/db'
import Link from 'next/link'

export default async function Home() {
  const snippets = await db.snippet.findMany();
  
  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{snippet.title}</h3>
        <Link 
          href={`/snippets/${snippet.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          View
        </Link>
      </div>
    </div>
  ))

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Snippets</h1>
          <Link 
            href='/snippets/new' 
            className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors font-medium'
          >
            New Snippet
          </Link>
        </div>
        <div className='grid gap-4'>
          {renderedSnippets}
        </div>
      </div>
    </div>
  )
}
