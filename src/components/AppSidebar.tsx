// src/components/app-sidebar.tsx

import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Clock,
  Plane,
  Search,
  AlertTriangle,
  XCircle,
  AlertOctagon,
  Package,
  Archive,
  Settings,
} from 'lucide-react';

// Interface para tipar os itens do menu
interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Array com todos os itens do menu
const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'On Hold',
    url: '/on-hold',
    icon: Clock,
  },
  {
    title: 'Item Voando',
    url: '/item-voando',
    icon: Plane,
  },
  {
    title: 'Missing',
    url: '/missing',
    icon: Search,
  },
  {
    title: 'Avarias',
    url: '/avarias',
    icon: AlertTriangle,
  },
  {
    title: 'Não Coube',
    url: '/nao-coube',
    icon: XCircle,
  },
  {
    title: 'Ofensores',
    url: '/ofensores',
    icon: AlertOctagon,
  },
  {
    title: 'Volumosos',
    url: '/volumosos',
    icon: Package,
  },
  {
    title: 'Backlog',
    url: '/backlog',
    icon: Archive,
  },
  {
    title: 'Configurações',
    url: '/settings',
    icon: Settings,
  },
];

// Componente principal da Sidebar
export function AppSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header da Sidebar */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {/* Logo/Ícone */}
          <div className="w-10 h-10 bg-[#EE4D2D] rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          
          {/* Título e Subtítulo */}
          <div>
            <h1 className="text-xl font-bold text-gray-900">LRJ-07</h1>
            <p className="text-sm text-gray-500">Inventário</p>
          </div>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <li key={item.url}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-[#EE4D2D] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-[#EE4D2D]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? 'text-white' : 'text-gray-500'
                        }`}
                      />
                      <span className="font-medium">{item.title}</span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer da Sidebar (opcional) */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          <p>Dashboard v1.0</p>
          <p className="mt-1">© 2025 LRJ-07</p>
        </div>
      </div>
    </aside>
  );
}

// Export padrão (caso você use em algum lugar como default)
export default AppSidebar;
