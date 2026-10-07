import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/data/insights";

type Block = { type: "heading" | "paragraph"; text: string };

function parseContent(source: string): Block[] {
  return source
    .trim()
    .split(/\n\s*\n/)
    .flatMap((chunk) => {
      const lines = chunk.trim().split("\n");
      const blocks: Block[] = [];
      let paragraph: string[] = [];

      for (const line of lines) {
        if (line.startsWith("## ")) {
          if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
          paragraph = [];
          blocks.push({ type: "heading", text: line.slice(3).trim() });
        } else {
          paragraph.push(line.trim());
        }
      }
      if (paragraph.length) blocks.push({ type: "paragraph", text: paragraph.join(" ") });
      return blocks;
    });
}

function findArticle(slug: string) {
  return insights.find((a) => a.slug === slug);
}

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ILKM Insights`,
    description: article.summary,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  const blocks = parseContent(article.content);

  return (
    <article className="py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center text-sm font-medium text-foreground-muted hover:text-accent mb-10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Back to Insights
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-mono text-foreground-muted mb-6">
            <time dateTime={article.date}>{article.date}</time>
            <span aria-hidden="true">|</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {article.title}
          </h1>
          <p className="text-xl text-foreground-muted border-l-2 border-accent pl-4">
            {article.summary}
          </p>
        </header>

        <div className="text-lg leading-relaxed text-foreground/90">
          {blocks.map((block, i) =>
            block.type === "heading" ? (
              <h2 key={i} className="mt-12 mb-4 text-2xl font-semibold text-foreground">
                {block.text}
              </h2>
            ) : (
              <p key={i} className="mb-6">
                {block.text}
              </p>
            )
          )}
        </div>
      </div>
    </article>
  );
}
