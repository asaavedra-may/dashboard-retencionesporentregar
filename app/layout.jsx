import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata = {
  title: 'Dashboard Retenciones | Mayoreo',
  description: 'Portal de gestión de retenciones pendientes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header />
              <main style={{ padding: '24px', flex: 1, backgroundColor: 'var(--bg-secondary)' }}>
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
