// src/components/ProtectedRoute.tsx

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSheetConfig } from '@/hooks/useSheetConfig';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Componente que protege rotas verificando se há configuração do Google Sheets
 * Se não houver configuração, redireciona para /settings automaticamente
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { hasConfig, isLoading } = useSheetConfig();
  const { toast } = useToast();
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    // Se não está carregando e não tem configuração, mostrar mensagem
    if (!isLoading && !hasConfig()) {
      setShowRedirectMessage(true);
      
      toast({
        title: 'Configure sua planilha primeiro',
        description: 'Você será redirecionado para a página de configuração.',
        className: 'bg-amber-500 text-white',
      });
    }
  }, [isLoading, hasConfig, toast]);

  // Mostrar loading enquanto verifica configuração
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-[#EE4D2D]" />
          <p className="text-gray-600 font-medium">Carregando configurações...</p>
        </div>
      </div>
    );
  }

  // Se não tem configuração, redirecionar para /settings
  if (!hasConfig() || showRedirectMessage) {
    return <Navigate to="/settings" replace />;
  }

  // Se tem configuração, renderizar conteúdo protegido
  return <>{children}</>;
}
