import { HeaderSeo } from "@/components/HeaderSeo";
import { SobreMiPage } from "@/components/Pages/SobreMi";
import { MainLayout } from "@/layouts";

export default function SobreMi() {
  return (
    <>
      <HeaderSeo title="Sobre mi - TarreDev" />
      <MainLayout>
        <SobreMiPage />
      </MainLayout>
    </>
  );
}
