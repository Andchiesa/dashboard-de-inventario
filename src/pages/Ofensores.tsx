import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Ofensores = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Ofensores</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Lista completa de ofensores com detalhes será exibida aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Ofensores;
