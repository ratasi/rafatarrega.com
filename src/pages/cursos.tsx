import { HeaderSeo } from "@/components/HeaderSeo";
import { CursosPage } from "@/components/Pages/Cursos";

export default function Cursos() {
  return (
    <>
      <HeaderSeo
        title="TarreDev Todos mis cursos"
        description="Todos los cursos impartidos en Udemy"
      />
      <CursosPage />
    </>
  );
}
