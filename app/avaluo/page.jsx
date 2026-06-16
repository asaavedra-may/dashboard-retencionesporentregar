'use client';

import { useState } from 'react';

export default function AvaluoPage() {
  const [empresa, setEmpresa] = useState('Todas');

  const data = [
    { centro: 'Febeca', sinVencer: 9599, dias1_30: 2830, dias31_60: 576, dias61_90: 259, dias91_120: 138, dias121: 332, total: 13733 },
    { centro: 'Beval', sinVencer: 1522, dias1_30: 439, dias31_60: 48, dias61_90: 25, dias91_120: 15, dias121: 86, total: 2136 },
    { centro: 'Sillaca', sinVencer: 999, dias1_30: 422, dias31_60: 118, dias61_90: 73, dias91_120: 15, dias121: 111, total: 1738 },
  ];

  const filteredData = empresa === 'Todas' ? data : data.filter(d => d.centro === empresa);

  // Totales
  const totals = filteredData.reduce((acc, curr) => {
    acc.sinVencer += curr.sinVencer;
    acc.dias1_30 += curr.dias1_30;
    acc.dias31_60 += curr.dias31_60;
    acc.dias61_90 += curr.dias61_90;
    acc.dias91_120 += curr.dias91_120;
    acc.dias121 += curr.dias121;
    acc.total += curr.total;
    return acc;
  }, { sinVencer: 0, dias1_30: 0, dias31_60: 0, dias61_90: 0, dias91_120: 0, dias121: 0, total: 0 });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Avalúo Mayoreo</h2>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <label style={{ fontWeight: '500' }}>Empresa:</label>
          <select 
            value={empresa} 
            onChange={(e) => setEmpresa(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
            }}
          >
            <option value="Todas">Todas</option>
            <option value="Febeca">Febeca</option>
            <option value="Beval">Beval</option>
            <option value="Sillaca">Sillaca</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Centro de Costo</th>
              <th rowSpan="2">Sin Vencer</th>
              <th colSpan="5" style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Días Vencidos</th>
              <th rowSpan="2">Total</th>
            </tr>
            <tr>
              <th>1-30</th>
              <th>31-60</th>
              <th>61-90</th>
              <th>91-120</th>
              <th>≥ 121</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.centro}>
                <td style={{ fontWeight: '500' }}>{row.centro}</td>
                <td>{row.sinVencer.toLocaleString()}</td>
                <td>{row.dias1_30.toLocaleString()}</td>
                <td>{row.dias31_60.toLocaleString()}</td>
                <td>{row.dias61_90.toLocaleString()}</td>
                <td>{row.dias91_120.toLocaleString()}</td>
                <td>{row.dias121.toLocaleString()}</td>
                <td style={{ fontWeight: '600' }}>{row.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: 'var(--bg-secondary)', fontWeight: 'bold' }}>
              <td>Total</td>
              <td>{totals.sinVencer.toLocaleString()}</td>
              <td>{totals.dias1_30.toLocaleString()}</td>
              <td>{totals.dias31_60.toLocaleString()}</td>
              <td>{totals.dias61_90.toLocaleString()}</td>
              <td>{totals.dias91_120.toLocaleString()}</td>
              <td>{totals.dias121.toLocaleString()}</td>
              <td>{totals.total.toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      
    </div>
  );
}
