type Row = Record<string, string>;

export function DataTable({ columns, rows }: { columns: string[]; rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-lavender-100 bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-lavender-50 text-xs uppercase tracking-[0.14em] text-muted">
            <tr>
              {columns.map((column) => (
                <th className="px-5 py-4 font-extrabold" key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-lavender-100">
            {rows.map((row, index) => (
              <tr className="text-ink" key={`${row[columns[0]]}-${index}`}>
                {columns.map((column) => (
                  <td className="px-5 py-4 font-semibold" key={column}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
