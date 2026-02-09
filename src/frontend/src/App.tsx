import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import AppLayout from './components/layout/AppLayout';
import TodayPage from './pages/TodayPage';
import TomorrowPage from './pages/TomorrowPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import NakshatraDetailPage from './pages/NakshatraDetailPage';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';

const rootRoute = createRootRoute({
  component: AppLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TodayPage,
});

const tomorrowRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tomorrow',
  component: TomorrowPage,
});

const knowledgeBaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/knowledge',
  component: KnowledgeBasePage,
});

const nakshatraDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/nakshatra/$slug',
  component: NakshatraDetailPage,
});

const routeTree = rootRoute.addChildren([indexRoute, tomorrowRoute, knowledgeBaseRoute, nakshatraDetailRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
