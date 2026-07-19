import { person, socials } from "@/content/site";
import { ArrowIcon } from "@/components/icons";
import { clean } from "@/lib/format";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const cleanName = clean(person.name);
  const email = socials.find((s) => s.icon === "email");

  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Contact invite */}
        {email && (
          <a
            href={email.href}
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            Get in touch
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        )}

        {/* Oversized editorial wordmark */}
        <p className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-ink sm:text-8xl">
          {cleanName}
        </p>

        {/* Thin baseline */}
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {cleanName} · Electronic Portfolio
          </p>
          <p>Aligned to the ISTE Standards for Educators</p>
        </div>
      </div>
    </footer>
  );
}
