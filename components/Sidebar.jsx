import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--bg-primary)',
      borderRight: '1px solid var(--border-color)',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        {/* Placeholder Logo */}
        <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--accent-black)', borderRadius: '8px' }}></div>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Mayoreo</h2>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link href="/" style={{
          padding: '12px 16px',
          borderRadius: '8px',
          backgroundColor: 'var(--bg-secondary)',
          fontWeight: '500'
        }}>
          Dashboard Retenciones
        </Link>
        <Link href="/avaluo" style={{
          padding: '12px 16px',
          borderRadius: '8px',
          fontWeight: '500',
          color: 'var(--text-secondary)'
        }}>
          Avalúo de Deudas
        </Link>
      </nav>
    </aside>
  );
}
