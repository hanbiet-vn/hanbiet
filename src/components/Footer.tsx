import Link from "next/link";
import { type Locale } from "@/i18n/routing";
import { getDict } from "@/i18n/dict";
import { localizedPath } from "@/i18n/path";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = (slug: string) => localizedPath(locale, slug);

  return (
    <footer className="mt-16 border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="mb-2 font-bold text-zinc-900">{t.common.siteName}</div>
            <p className="text-zinc-600">{t.footer.tagline}</p>
          </div>
          <div>
            <div className="mb-2 font-semibold text-zinc-900">{t.footer.services}</div>
            <ul className="space-y-1.5">
              <li><Link href={p("/joseon-test")} className="hover:text-[var(--brand)]">{t.footer.joseonLink}</Link></li>
              <li><Link href={p("/sau-han-quoc")} className="hover:text-[var(--brand)]">{t.footer.sajuLink}</Link></li>
              <li><Link href={p("/saju-cap-doi")} className="hover:text-[var(--brand)]">{t.footer.coupleLink}</Link></li>
              <li><Link href={p("/mon-an-han-quoc")} className="hover:text-[var(--brand)]">{t.footer.foodLink}</Link></li>
              <li><Link href={p("/doc-seoul")} className="hover:text-[var(--brand)]">{t.footer.hillsLink}</Link></li>
              <li><Link href={p("/bai-viet")} className="hover:text-[var(--brand)]">{t.footer.blogLink}</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 font-semibold text-zinc-900">{t.footer.info}</div>
            <ul className="space-y-1.5">
              <li><Link href={p("/gioi-thieu")} className="hover:text-[var(--brand)]">{t.footer.aboutLink}</Link></li>
              <li><Link href={p("/chinh-sach-bao-mat")} className="hover:text-[var(--brand)]">{t.footer.privacyLink}</Link></li>
              <li><Link href={p("/dieu-khoan")} className="hover:text-[var(--brand)]">{t.footer.termsLink}</Link></li>
              <li><Link href={p("/lien-he")} className="hover:text-[var(--brand)]">{t.footer.contactLink}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {t.common.siteName}. {t.footer.copyright} · {t.footer.disclaimer}
        </div>
      </div>
    </footer>
  );
}
