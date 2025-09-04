'use server';

import db from "@/db";
import { Snippet } from "@/lib/prisma/client";
import { redirect } from "next/navigation";

export async function createSnippet(formState: {message : string}, formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    if (typeof title !== 'string' || typeof code !== 'string' || title.length < 5 || code.length < 5) {
      return {
        message: "Snippet must be longer than 10 characters and both title and code must be strings",
      }
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    })
  } catch (error) {
    return {
      message: "Error creating snippet",
    }
  }
  redirect('/')
}

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