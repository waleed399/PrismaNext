'use client';
import { useActionState } from "react";
import * as actions from "@/actions";
export default function SnippetCreatePage() {
const [formState, action] = useActionState(actions.createSnippet,{message: ""})

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            Create New Snippet
          </h2>
        </div>
        <form className="mt-8 space-y-6" action={action}>
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter snippet title"
              />
            </div>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
                Code
              </label>
              <textarea
                id="code"
                name="code"
                required
                rows={6}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm font-mono"
                placeholder="Enter your code here"
              />
            </div>
          </div>
          <div className="space-y-4">
            {/* Error Message */}
            {formState.message && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg 
                      className="h-5 w-5 text-red-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Validation Error
                    </h3>
                    <div className="mt-1 text-sm text-red-700">
                      {formState.message}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Create Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

