import { Container, Main, ServiceGrid } from "./style";
import Fade from "react-reveal/Fade";

export default function DesignDemo() {
  return (
    <Container>
      <Fade up>
        <Main />
      </Fade>
    </Container>
  );
}
