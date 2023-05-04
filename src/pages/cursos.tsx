import { HeaderSeo } from "@/components/HeaderSeo";
import { CursosPage } from "@/components/Pages/Cursos";
import Layouts from "@/layouts";


export default function Cursos() {
  return (
    <>
      <HeaderSeo
        title="TarreDev Todos mis cursos"
        description="Todos los cursos impartidos en Udemy"
      />
      <Layouts.MainLayout>
        <CursosPage />
      </Layouts.MainLayout>
    </>
  );
}
