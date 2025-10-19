// src/pages/Settings.tsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSheetConfig } from '@/hooks/useSheetConfig';
import { SheetConfig } from '@/types/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Link2, Settings as SettingsIcon, Loader2 } from 'lucide-react';

export default function Settings() {
  const navigate = useNavigate();
  const { config, saveConfig, validateConfig, hasConfig } = useSheetConfig();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estado do formulário
  const [formData, setFormData] = useState<SheetConfig>({
    spreadsheetUrl: '',
    gids: {
      geral: '',
      comercial: '',
      backlog: '',
      lost: '',
      itemVoando: '',
      avarias: '',
      realocados: '',
      looping: '',
      naoCoube: '',
      onHold: '',
    },
  });

  // Carregar configuração existente (se houver)
  useEffect(() => {
    if (config) {
      setFormData(config);
    }
  }, [config]);

  // Atualizar campo de texto
  const handleUrlChange = (value: string) => {
    setFormData(prev => ({ ...prev, spreadsheetUrl: value }));
  };

  // Atualizar GID
  const handleGidChange = (gidKey: keyof SheetConfig['gids'], value: string) => {
    setFormData(prev => ({
      ...prev,
      gids: {
        ...prev.gids,
        [gidKey]: value,
      },
    }));
  };

  // Submeter formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar configuração
    const validation = validateConfig(formData);

    if (!validation.isValid) {
      toast({
        variant: 'destructive',
        title: 'Erro de Validação',
        description: validation.errors[0], // Mostrar primeiro erro
      });
      setIsSubmitting(false);
      return;
    }

    // Salvar configuração
    const success = saveConfig(formData);

    if (success) {
      toast({
        title: 'Configuração salva com sucesso!',
        description: 'Redirecionando para o dashboard...',
        className: 'bg-[#EE4D2D] text-white',
      });

      // Redirecionar após 1.5 segundos
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      toast({
        variant: 'destructive',
        title: 'Erro ao salvar',
        description: 'Não foi possível salvar a configuração. Tente novamente.',
      });
    }

    setIsSubmitting(false);
  };

  // Cancelar e voltar
  const handleCancel = () => {
    if (hasConfig()) {
      navigate('/');
    } else {
      toast({
        variant: 'destructive',
        title: 'Configure primeiro',
        description: 'É necessário configurar a planilha antes de acessar o dashboard.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#EE4D2D] mb-2">
            Configuração Inicial
          </h1>
          <p className="text-gray-600">
            Configure a conexão com o Google Sheets
          </p>
        </div>

        {/* Card Principal */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Link2 className="w-5 h-5" />
              Configuração Google Sheets
            </CardTitle>
            <CardDescription>
              Insira a URL da planilha e os GIDs de cada guia
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* URL da Planilha */}
              <div className="space-y-2">
                <Label htmlFor="spreadsheetUrl" className="text-base font-semibold">
                  URL da Planilha
                </Label>
                <Input
                  id="spreadsheetUrl"
                  type="text"
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  value={formData.spreadsheetUrl}
                  onChange={(e) => handleUrlChange(e.target.value)}
                  className="w-full"
                  required
                />
                <p className="text-sm text-gray-500">
                  Cole a URL completa da planilha do Google Sheets
                </p>
              </div>

              {/* Grid de GIDs - 2 colunas em telas grandes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* GID - Geral */}
                <div className="space-y-2">
                  <Label htmlFor="gid-geral" className="text-sm font-medium">
                    GID - Geral
                  </Label>
                  <Input
                    id="gid-geral"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.geral}
                    onChange={(e) => handleGidChange('geral', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Comercial */}
                <div className="space-y-2">
                  <Label htmlFor="gid-comercial" className="text-sm font-medium">
                    GID - Comercial
                  </Label>
                  <Input
                    id="gid-comercial"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.comercial}
                    onChange={(e) => handleGidChange('comercial', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Backlog */}
                <div className="space-y-2">
                  <Label htmlFor="gid-backlog" className="text-sm font-medium">
                    GID - Backlog
                  </Label>
                  <Input
                    id="gid-backlog"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.backlog}
                    onChange={(e) => handleGidChange('backlog', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Lost */}
                <div className="space-y-2">
                  <Label htmlFor="gid-lost" className="text-sm font-medium">
                    GID - Lost
                  </Label>
                  <Input
                    id="gid-lost"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.lost}
                    onChange={(e) => handleGidChange('lost', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Item Voando */}
                <div className="space-y-2">
                  <Label htmlFor="gid-itemVoando" className="text-sm font-medium">
                    GID - Item Voando
                  </Label>
                  <Input
                    id="gid-itemVoando"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.itemVoando}
                    onChange={(e) => handleGidChange('itemVoando', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Avarias */}
                <div className="space-y-2">
                  <Label htmlFor="gid-avarias" className="text-sm font-medium">
                    GID - Avarias
                  </Label>
                  <Input
                    id="gid-avarias"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.avarias}
                    onChange={(e) => handleGidChange('avarias', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Realocados */}
                <div className="space-y-2">
                  <Label htmlFor="gid-realocados" className="text-sm font-medium">
                    GID - Realocados
                  </Label>
                  <Input
                    id="gid-realocados"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.realocados}
                    onChange={(e) => handleGidChange('realocados', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Looping */}
                <div className="space-y-2">
                  <Label htmlFor="gid-looping" className="text-sm font-medium">
                    GID - Looping
                  </Label>
                  <Input
                    id="gid-looping"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.looping}
                    onChange={(e) => handleGidChange('looping', e.target.value)}
                    required
                  />
                </div>

                {/* GID - Não Coube */}
                <div className="space-y-2">
                  <Label htmlFor="gid-naoCoube" className="text-sm font-medium">
                    GID - Não Coube
                  </Label>
                  <Input
                    id="gid-naoCoube"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.naoCoube}
                    onChange={(e) => handleGidChange('naoCoube', e.target.value)}
                    required
                  />
                </div>

                {/* GID - On Hold */}
                <div className="space-y-2">
                  <Label htmlFor="gid-onHold" className="text-sm font-medium">
                    GID - On Hold (Volumosos)
                  </Label>
                  <Input
                    id="gid-onHold"
                    type="text"
                    placeholder="Ex: 0, 123456"
                    value={formData.gids.onHold}
                    onChange={(e) => handleGidChange('onHold', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Helper text para encontrar GID */}
              <p className="text-sm text-gray-500 mt-2">
                💡 <strong>Como encontrar o GID:</strong> Abra a guia desejada na planilha e copie o número após <code className="bg-gray-100 px-1 rounded">/edit#gid=</code> na URL
              </p>

              {/* Botões de Ação */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#EE4D2D] hover:bg-[#d63d1d] text-white font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Salvando...
                    </>
                  ) : (
                    'Salvar Configuração'
                  )}
                </Button>

                {hasConfig() && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    Cancelar
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Informações adicionais sobre GitHub Pages */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <SettingsIcon className="w-4 h-4" />
            Configuração para GitHub Pages
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Certifique-se de que a planilha está com permissão de <strong>visualização pública</strong></li>
            <li>• Os dados são atualizados diretamente do Google Sheets</li>
            <li>• Você pode editar essas configurações a qualquer momento pelo menu lateral</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
