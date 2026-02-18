import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../contexts/AppContext';
import TopBar from '../common/ui/components/TopBar';
import Footer from '../common/ui/components/Footer';
import HomePage from '../../features/home/ui/pages/HomePage';

/** Page key for Astro: LayoutShell renders the page internally so it stays inside AppProvider (no slot SSR). */
export type LayoutShellPage = 'home';

interface LayoutShellProps {
  /** Current path (e.g. from Astro.url.pathname). When set, wraps in MemoryRouter and uses static <a> nav. */
  pathname?: string;
  /** When set (Astro), render this page inside the shell so AppProvider wraps it. Pass children only when not using page. */
  page?: LayoutShellPage;
  children?: ReactNode;
}

/**
 * Shared layout shell: TopBar + content + Footer.
 * When pathname is provided (Astro), wraps in MemoryRouter so useLocation() works, and TopBar/Footer use <a> for real navigation.
 * Use page="home" in Astro so the page component is rendered inside AppProvider (avoids SSR context error).
 */
export default function LayoutShell({ pathname, page, children }: LayoutShellProps) {
  const content = (
    <AppProvider>
      <TopBar showBrand={pathname !== '/'} pathname={pathname} />
      <div className="layout-content">
        {page === 'home' ? <HomePage /> : children}
      </div>
      <Footer title="PHARUS PHOTOGRAPHY" showSocialIcons pathname={pathname} />
    </AppProvider>
  );

  if (pathname !== undefined) {
    return (
      <MemoryRouter initialEntries={[pathname]} initialIndex={0}>
        {content}
      </MemoryRouter>
    );
  }

  return content;
}
