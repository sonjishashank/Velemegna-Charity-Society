import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout';
import AppRoutes from '@/routes';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="velmegna-theme">
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;