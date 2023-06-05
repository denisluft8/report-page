import {
  EloDistribution,
  Header,
  PageSection,
  Recomendaciones,
  Resumen,
} from "../../components";
import data from "../../data/data";
import useFormattedDate from "../../hooks/useFormattedDate";
import { HomeFooter } from "../Home/Home.styles";
import { EstadisticaStyled, HorizontalContainerEs } from "./Estadistica.styles";

export const Estadistica = () => {
  const formattedDate = useFormattedDate();

  return (
    <PageSection>
      <EstadisticaStyled>
        <Header
          title={"PLAYER STATISTICS"}
          upTitle={"VISION PERFORMANCE"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin quis tellus in facilisis. Aenean aliquet hendrerit felis, sagittis pulvinar augue ullamcorper ut."
          }
        />
        <EloDistribution positionCircle={data.estadisticaDelJugador.eloDistribution - 1} />
        <HorizontalContainerEs>
          <Resumen />
          <Recomendaciones data={data.estadisticaDelJugador.recomendaciones} />
        </HorizontalContainerEs>
        <HomeFooter>
          <h3>EVALUATION DATE | {formattedDate}</h3>
        </HomeFooter>
      </EstadisticaStyled>
    </PageSection>
  );
};
