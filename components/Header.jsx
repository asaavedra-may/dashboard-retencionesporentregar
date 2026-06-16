'use client';

import { useTheme } from './ThemeProvider';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header style={{
      padding: '16px 24px',
      backgroundColor: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Dashboard de Retenciones</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Monitor Unificado</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          className="btn"
          style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
        >
          Cargar Excel
        </button>

        <select 
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
        >
          <option value="light">☀️ Claro</option>
          <option value="dark">🌙 Oscuro</option>
          <option value="system">💻 Sistema</option>
        </select>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-light-grey)' }}></div>
          <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Usuario</span>
        </div>
      </div>
    </header>
  );
}
