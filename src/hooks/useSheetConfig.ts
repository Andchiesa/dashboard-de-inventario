// src/hooks/useSheetConfig.ts

import { useState, useEffect } from 'react';
import { SheetConfig, CONFIG_STORAGE_KEY } from '@/types/config';

/**
 * Hook customizado para gerenciar configurações do Google Sheets
 * Fornece funções para salvar, carregar e validar configurações
 */
export const useSheetConfig = () => {
  const [config, setConfig] = useState<SheetConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar configuração do localStorage ao montar o componente
  useEffect(() => {
    loadConfig();
  }, []);

  /**
   * Carrega a configuração do localStorage
   */
  const loadConfig = () => {
    try {
      const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (stored) {
        const parsedConfig = JSON.parse(stored) as SheetConfig;
        setConfig(parsedConfig);
      }
    } catch (error) {
      console.error('Erro ao carregar configuração:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Salva a configuração no localStorage
   */
  const saveConfig = (newConfig: SheetConfig): boolean => {
    try {
      const configWithTimestamp = {
        ...newConfig,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(configWithTimestamp));
      setConfig(configWithTimestamp);
      return true;
    } catch (error) {
      console.error('Erro ao salvar configuração:', error);
      return false;
    }
  };

  /**
   * Verifica se a URL é válida do Google Sheets
   */
  const validateSpreadsheetUrl = (url: string): boolean => {
    if (!url || url.trim() === '') return false;
    return url.includes('docs.google.com/spreadsheets');
  };

  /**
   * Verifica se o GID é válido (numérico)
   */
  const validateGid = (gid: string): boolean => {
    if (!gid || gid.trim() === '') return false;
    return /^\d+$/.test(gid.trim());
  };

  /**
   * Valida a configuração completa
   */
  const validateConfig = (configToValidate: SheetConfig): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Validar URL
    if (!validateSpreadsheetUrl(configToValidate.spreadsheetUrl)) {
      errors.push('URL da planilha inválida. Deve ser uma URL do Google Sheets.');
    }

    // Validar cada GID
    const gidLabels = {
      geral: 'GID - Geral',
      comercial: 'GID - Comercial',
      backlog: 'GID - Backlog',
      lost: 'GID - Lost',
      itemVoando: 'GID - Item Voando',
      avarias: 'GID - Avarias',
      realocados: 'GID - Realocados',
      looping: 'GID - Looping',
      naoCoube: 'GID - Não Coube',
      onHold: 'GID - On Hold',
    };

    Object.entries(configToValidate.gids).forEach(([key, value]) => {
      if (!validateGid(value)) {
        errors.push(`${gidLabels[key as keyof typeof gidLabels]} inválido. Deve ser um número.`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
  };

  /**
   * Remove a configuração (útil para reset)
   */
  const clearConfig = () => {
    localStorage.removeItem(CONFIG_STORAGE_KEY);
    setConfig(null);
  };

  /**
   * Verifica se existe configuração salva
   */
  const hasConfig = (): boolean => {
    return config !== null;
  };

  return {
    config,
    isLoading,
    saveConfig,
    loadConfig,
    clearConfig,
    hasConfig,
    validateConfig,
    validateSpreadsheetUrl,
    validateGid,
  };
};
