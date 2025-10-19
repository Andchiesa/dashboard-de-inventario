import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NaoCoube = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Não Coube</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Análise de pedidos não couberam será exibida aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default NaoCoube;
