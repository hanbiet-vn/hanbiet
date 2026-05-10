import Link from "next/link";
import type { Block } from "@/lib/articles";
import type { Locale } from "@/i18n/routing";
import { localizedPath } from "@/i18n/path";

// Render a tiny subset of inline markdown: **bold** only.
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-zinc-900">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

export default function ArticleBody({
  blocks,
  locale,
}: {
  blocks: Block[];
  locale: Locale;
}) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.type === "p") {
          const text = locale === "ko" ? b.ko : b.vi;
          return (
            <p key={i} className="text-zinc-700 leading-relaxed">
              {renderInline(text)}
            </p>
          );
        }
        if (b.type === "h2") {
          return (
            <h2 key={i} className="mt-8 text-2xl font-extrabold text-zinc-900">
              {locale === "ko" ? b.ko : b.vi}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={i} className="mt-6 text-lg font-bold text-zinc-900">
              {locale === "ko" ? b.ko : b.vi}
            </h3>
          );
        }
        if (b.type === "ul") {
          const items = locale === "ko" ? b.ko : b.vi;
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-6 text-zinc-700">
              {items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ul>
          );
        }
        if (b.type === "ol") {
          const items = locale === "ko" ? b.ko : b.vi;
          return (
            <ol key={i} className="list-decimal space-y-1.5 pl-6 text-zinc-700">
              {items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ol>
          );
        }
        if (b.type === "callout") {
          const text = locale === "ko" ? b.ko : b.vi;
          return (
            <div
              key={i}
              className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900"
            >
              {renderInline(text)}
            </div>
          );
        }
        // cta
        return (
          <div key={i} className="my-4">
            <Link
              href={localizedPath(locale, b.href)}
              className="btn-primary inline-flex"
            >
              {locale === "ko" ? b.ko : b.vi}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
