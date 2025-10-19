import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Missing = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Missing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dados de itens faltantes serão exibidos aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Missing;
