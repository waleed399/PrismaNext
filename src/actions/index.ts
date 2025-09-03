'use server';

import db from "@/db";
import { Snippet } from "@/lib/prisma/client";
import { redirect } from "next/navigation";

export async function editSnippet(snippet: Snippet) {
   await db.snippet.update({
    where: { id: snippet.id },
    data: snippet,
  });
    redirect(`/snippets/${snippet.id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect(`/`);
}