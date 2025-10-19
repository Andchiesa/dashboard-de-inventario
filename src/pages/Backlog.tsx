import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Backlog = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Backlog</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Análise detalhada do backlog será exibida aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Backlog;
