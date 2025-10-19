import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ItemVoando = () => {
  return (
    <DashboardLayout>
      <Card>
        <CardHeader>
          <CardTitle>Item Voando</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dados de itens em trânsito serão exibidos aqui.
          </p>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ItemVoando;
