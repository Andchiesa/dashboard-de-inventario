import { MetricCard } from "@/components/MetricCard";
import {
  ShoppingCart,
  Clock,
  AlertCircle,
  Plane,
  PackageX,
  RefreshCw,
  RotateCcw,
  PackageOpen,
  UserX,
  Package,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data - será substituído por dados do Google Sheets
const mockData = {
  pedidosComerciais: 1247,
  backlogAM: 342,
  backlogDDP: 158,
  lostsDesvios: 23,
  itensVoando: 89,
  avarias: 45,
  realocados: 67,
  looping: 12,
  naoCoubeCarros: 134,
  naoCoubeMoto: 89,
  volumosos: 56,
};

const avariasPorTipo = [
  { name: "Embalagem", value: 18 },
  { name: "Manuseio", value: 12 },
  { name: "Transporte", value: 10 },
  { name: "Outros", value: 5 },
];

const COLORS = ['hsl(11 84% 55%)', 'hsl(11 84% 45%)', 'hsl(11 84% 35%)', 'hsl(11 84% 25%)'];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Main Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Pedidos Comerciais"
          value={mockData.pedidosComerciais.toLocaleString()}
          icon={ShoppingCart}
          trend={{ value: 12, isPositive: true }}
        />
        <MetricCard
          title="Backlog AM"
          value={mockData.backlogAM.toLocaleString()}
          icon={Clock}
          subtitle="Aguardando processamento"
        />
        <MetricCard
          title="Backlog DDP"
          value={mockData.backlogDDP.toLocaleString()}
          icon={Clock}
          subtitle="Seg-Sex (Sáb-Dom sem DDP)"
        />
        <MetricCard
          title="Losts e Desvios"
          value={mockData.lostsDesvios}
          icon={AlertCircle}
          trend={{ value: 8, isPositive: false }}
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="Itens Voando"
          value={mockData.itensVoando}
          icon={Plane}
        />
        <MetricCard
          title="Avarias Total"
          value={mockData.avarias}
          icon={PackageX}
        />
        <MetricCard
          title="Realocados Hoje"
          value={mockData.realocados}
          icon={RefreshCw}
        />
        <MetricCard
          title="Pedidos em Looping"
          value={mockData.looping}
          icon={RotateCcw}
        />
        <MetricCard
          title="Volumosos"
          value={mockData.volumosos}
          icon={Package}
        />
      </div>

      {/* Não Coube Breakdown */}
      <div className="grid gap-4 md:grid-cols-2">
        <MetricCard
          title="Não Coube - Carro"
          value={mockData.naoCoubeCarros}
          icon={PackageOpen}
        />
        <MetricCard
          title="Não Coube - Moto"
          value={mockData.naoCoubeMoto}
          icon={PackageOpen}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Avarias por Tipo */}
        <Card>
          <CardHeader>
            <CardTitle>Avarias por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={avariasPorTipo}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {avariasPorTipo.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top 10 Ofensores Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Ofensores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { ops: "ops77952", count: 45 },
                { ops: "ops83421", count: 38 },
                { ops: "ops91234", count: 32 },
                { ops: "ops65789", count: 28 },
                { ops: "ops44521", count: 24 },
                { ops: "ops33214", count: 21 },
                { ops: "ops88765", count: 19 },
                { ops: "ops55432", count: 16 },
                { ops: "ops22198", count: 14 },
                { ops: "ops99876", count: 12 },
              ].map((item, index) => (
                <div key={item.ops} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <span className="font-mono text-sm">{item.ops}</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
