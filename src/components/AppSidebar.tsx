import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Pause,
  Plane,
  AlertTriangle,
  PackageX,
  PackageOpen,
  UserX,
  Package,
  Clock,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "On Hold", url: "/on-hold", icon: Pause },
  { title: "Item Voando", url: "/item-voando", icon: Plane },
  { title: "Missing", url: "/missing", icon: AlertTriangle },
  { title: "Avarias", url: "/avarias", icon: PackageX },
  { title: "Não Coube", url: "/nao-coube", icon: PackageOpen },
  { title: "Ofensores", url: "/ofensores", icon: UserX },
  { title: "Volumosos", url: "/volumosos", icon: Package },
  { title: "Backlog", url: "/backlog", icon: Clock },
];

export function AppSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col">
      <div className="border-b border-border p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-foreground">LRJ-07</h2>
            <p className="text-xs text-muted-foreground">Inventário</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <p className="text-xs font-semibold text-muted-foreground mb-3 px-3">MENU</p>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted text-foreground"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
