import { HeaderSeo } from "@/components/HeaderSeo";
import { RecomendationsPage } from "@/components/Pages/Recomendaciones";

export default function Setup() {
  return (
    <>
      <HeaderSeo title="Algunas recomendaciones" />
      <RecomendationsPage />
    </>
  );
}
