export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="muted-label">{eyebrow}</p>
      <h1 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{text}</p>
    </div>
  );
}
