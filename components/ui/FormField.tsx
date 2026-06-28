export function FormField({
  label,
  type = "text",
  placeholder,
  textarea
}: {
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-ink">
      {label}
      {textarea ? (
        <textarea className="min-h-32 rounded-2xl border border-lavender-100 bg-white px-4 py-3 font-medium outline-none transition focus:border-rosefit-300 focus:ring-4 focus:ring-rosefit-100" placeholder={placeholder} />
      ) : (
        <input className="h-12 rounded-2xl border border-lavender-100 bg-white px-4 font-medium outline-none transition focus:border-rosefit-300 focus:ring-4 focus:ring-rosefit-100" type={type} placeholder={placeholder} />
      )}
    </label>
  );
}
