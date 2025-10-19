import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Avarias = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Avarias</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Análise detalhada de avarias será exibida aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Avarias;
