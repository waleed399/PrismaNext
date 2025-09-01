export default function SnippetLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header skeleton */}
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-200 rounded-md w-64 mx-auto animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-48 mx-auto animate-pulse"></div>
        </div>

        {/* Code block skeleton */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            {/* Code header */}
            <div className="flex items-center justify-between">
              <div className="h-4 bg-gray-200 rounded-md w-24 animate-pulse"></div>
              <div className="flex space-x-2">
                <div className="h-8 bg-gray-200 rounded-md w-20 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded-md w-20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Code content skeleton */}
            <div className="bg-gray-900 rounded-md p-4 space-y-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-8 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions skeleton */}
        <div className="flex justify-center space-x-4">
          <div className="h-10 bg-gray-200 rounded-md w-24 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-md w-24 animate-pulse"></div>
        </div>

        {/* Loading spinner */}
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    </div>
  )
}
