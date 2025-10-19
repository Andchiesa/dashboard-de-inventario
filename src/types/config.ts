// src/types/config.ts

/**
 * Interface que define a estrutura de configuração do Google Sheets
 * Armazena a URL da planilha e os GIDs de todas as guias necessárias
 */
export interface SheetConfig {
  spreadsheetUrl: string;
  gids: {
    geral: string;
    comercial: string;
    backlog: string;
    lost: string;
    itemVoando: string;
    avarias: string;
    realocados: string;
    looping: string;
    naoCoube: string;
    onHold: string;
  };
  lastUpdated?: string;
}

/**
 * Chave usada para armazenar as configurações no localStorage
 */
export const CONFIG_STORAGE_KEY = 'dashboard-lrj07-config';

