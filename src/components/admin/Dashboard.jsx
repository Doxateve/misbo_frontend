const stats = [
  { label: "Ingresos", valor: "$24,500" },
  { label: "Compras", valor: "128" },
  { label: "Productos", valor: "34" },
];

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-5">Resumen de ventas</h2>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {stats.map(({ label, valor }) => (
          <div
            key={label}
            className="bg-zinc-900 border border-purple-500/15 rounded-xl px-5 py-4"
          >
            <p className="text-xs text-zinc-400 mb-1">{label}</p>
            <p className="text-2xl font-bold text-white">{valor}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-purple-500/15 rounded-xl p-5 mb-4">
        <p className="text-sm font-semibold text-white mb-3.5">
          Ventas por mes
        </p>
        <div className="h-45">{/* gráfico de ventas por mes */}</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 border border-purple-500/15 rounded-xl p-5">
          <p className="text-sm font-semibold text-white mb-3.5">
            Ventas por categoría
          </p>
          <div className="h-37.5">{/* gráfico por categoría */}</div>
        </div>

        <div className="bg-zinc-900 border border-purple-500/15 rounded-xl p-5">
          <p className="text-sm font-semibold text-white mb-3.5">
            Productos más vendidos
          </p>
          <div className="h-37.5">{/* gráfico de más vendidos */}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
