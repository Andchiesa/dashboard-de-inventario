import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OnHold = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>On Hold</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dados de pedidos em espera serão exibidos aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default OnHold;
