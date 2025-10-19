// src/App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import Settings from '@/pages/Settings';

// Importar suas páginas existentes do dashboard
// Ajuste os imports conforme a estrutura real do seu projeto
import Dashboard from '@/pages/Dashboard'; // ou o nome da sua página principal
// Adicione outras páginas se necessário

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de Configuração (pública - não protegida) */}
        <Route path="/settings" element={<Settings />} />

        {/* Rotas do Dashboard (protegidas) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Página principal do dashboard */}
          <Route index element={<Dashboard />} />
          
          {/* Adicione outras rotas aninhadas aqui se necessário */}
          {/* Exemplo:
          <Route path="comercial" element={<Comercial />} />
          <Route path="backlog" element={<Backlog />} />
          */}
        </Route>

        {/* Rota 404 - Redireciona para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Toast notifications */}
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
