import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Volumosos = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Volumosos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dados de pedidos volumosos serão exibidos aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Volumosos;
