import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DashboardHeaderProps {
  dateFilter: Date;
  setDateFilter: (date: Date) => void;
  viewMode: "day" | "week" | "month" | "year";
  setViewMode: (mode: "day" | "week" | "month" | "year") => void;
}

export function DashboardHeader({
  dateFilter,
  setDateFilter,
  viewMode,
  setViewMode,
}: DashboardHeaderProps) {
  const viewModes = [
    { value: "day", label: "Dia" },
    { value: "week", label: "Semana" },
    { value: "month", label: "Mês" },
    { value: "year", label: "Ano" },
  ] as const;

  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Dashboard de Inventário
            </h1>
            <p className="text-sm text-muted-foreground">
              Última atualização: {format(new Date(), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Date Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                {format(dateFilter, "dd/MM/yyyy", { locale: ptBR })}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="single"
                selected={dateFilter}
                onSelect={(date) => date && setDateFilter(date)}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          {/* View Mode Selector */}
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            {viewModes.map((mode) => (
              <Button
                key={mode.value}
                variant={viewMode === mode.value ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode(mode.value)}
                className="text-xs"
              >
                {mode.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
