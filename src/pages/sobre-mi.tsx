import { HeaderSeo } from "@/components/HeaderSeo";
import { SobreMiPage } from "@/components/Pages/SobreMi";
import Layouts from "@/layouts";


export default function SobreMi() {
  return (
    <>
      <HeaderSeo title="Sobre mi - TarreDev" />
      <Layouts.MainLayout>
        <SobreMiPage />
      </Layouts.MainLayout>
    </>
  );
}
