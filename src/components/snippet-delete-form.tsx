'use client';

import type { Snippet } from "@/lib/prisma/client";
import { useState } from "react";
import { deleteSnippet } from "@/actions";
import Link from 'next/link';

interface SnippetDeleteFormProps {
    snippet: Snippet;
}

export default function SnippetDeleteForm({ snippet }: SnippetDeleteFormProps) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        await deleteSnippet(snippet.id);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Warning Icon */}
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full">
                        <svg 
                            className="w-8 h-8 text-red-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                            />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
                        Delete Snippet
                    </h1>

                    {/* Warning Message */}
                    <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                        <p className="text-red-800 text-center">
                            <strong>Warning:</strong> This action cannot be undone. The snippet will be permanently deleted.
                        </p>
                    </div>

                    {/* Snippet Details */}
                    <div className="bg-gray-50 rounded-md p-4 mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {snippet.title}
                        </h3>
                        <div className="bg-gray-900 rounded-md p-3 overflow-x-auto">
                            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                                {snippet.code}
                            </pre>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/snippets/${snippet.id}`}
                            className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 text-center font-medium"
                        >
                            Cancel
                        </Link>
                        
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="flex-1 sm:flex-none px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDeleting ? 'Deleting...' : 'Delete Snippet'}
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>If you're not sure, you can always edit the snippet instead of deleting it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

