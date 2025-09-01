'use client';

import type { Snippet } from "@/lib/prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
interface SnippetEditFormProps {
    snippet: Snippet;
}
export default function SnippetEditForm({snippet}: SnippetEditFormProps) {

    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    }

    return (
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
    )
}