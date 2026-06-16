export default function DashboardPage() {
  // Datos mockeados
  const mockData = [
    { id: 1, fecha: '16-06-2026', vendedor: 'Gustavo.17', analista: 'CELESTE RICARDO', cliente: '2580377', factura: 'Z115', monto: '$990.00', estado: 'PENDIENTE' },
    { id: 2, fecha: '16-06-2026', vendedor: 'Luis Robles', analista: 'INDIRA GUTIERREZ', cliente: '3709000 agrojumbo', factura: 'Z089', monto: '$970.00', estado: 'GESTIONADO' },
    { id: 3, fecha: '15-06-2026', vendedor: 'Maria Garcia', analista: 'MARIO LA VEGLIA', cliente: '4588211 ferreteria', factura: 'F221', monto: '$1250.00', estado: 'PENDIENTE' },
  ];

  const analystStats = [
    { nombre: 'CELESTE RICARDO', pendientes: 15, procesadas: 45 },
    { nombre: 'INDIRA GUTIERREZ', pendientes: 8, procesadas: 32 },
    { nombre: 'MARIO LA VEGLIA', pendientes: 22, procesadas: 18 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Tarjetas de Métricas Superiores */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div className="card" style={{ borderLeft: '4px solid var(--info)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>Total Pendientes</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700' }}>45</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid var(--danger)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>Monto Pendiente</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700' }}>$12,540.00</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid var(--success)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px' }}>Procesadas Hoy</h3>
          <p style={{ fontSize: '2rem', fontWeight: '700' }}>95</p>
        </div>
      </div>

      {/* Retenciones por Analista */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '10px' }}>Retenciones por Analista</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {analystStats.map((analyst, index) => (
          <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontWeight: '600' }}>{analyst.nombre}</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Analista</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--danger)', fontWeight: '600' }}>{analyst.pendientes} Pendientes</p>
              <p style={{ color: 'var(--success)', fontSize: '0.875rem' }}>{analyst.procesadas} Procesadas</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabla Principal */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '10px' }}>Detalle de Clientes</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Vendedor</th>
              <th>Analista</th>
              <th>Cod. Cliente / Nombre</th>
              <th>Factura / Zona</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.id}>
                <td>{row.fecha}</td>
                <td>{row.vendedor}</td>
                <td style={{ fontWeight: '500', color: 'var(--info)' }}>{row.analista}</td>
                <td>{row.cliente}</td>
                <td>{row.factura}</td>
                <td style={{ fontWeight: '600' }}>{row.monto}</td>
                <td>
                  <span className={`badge ${row.estado === 'PENDIENTE' ? 'badge-warning' : 'badge-success'}`}>
                    {row.estado}
                  </span>
                </td>
                <td>
                  <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>
                    Gestionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
