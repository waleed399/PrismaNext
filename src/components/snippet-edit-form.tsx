'use client';

import type { Snippet } from "@/lib/prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { editSnippet } from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet;
}
export default function SnippetEditForm({snippet}: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await editSnippet({ ...snippet, code });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Editor
                    height="500px"
                    theme="vs-dark"
                    language="javascript"
                    defaultValue={snippet.code}
                    options={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                    onChange={handleEditorChange}
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
    )
}