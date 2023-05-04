import { HeaderSeo } from "@/components/HeaderSeo";
import { RecomendationsPage } from "@/components/Pages/Recomendaciones";
import Layouts from "@/layouts";


export default function Setup() {
  return (
    <>
      <HeaderSeo title="Algunas recomendaciones" />
      <Layouts.MainLayout>
        <RecomendationsPage />
      </Layouts.MainLayout>
    </>
  );
}
