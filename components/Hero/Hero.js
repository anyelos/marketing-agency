import {
  Container,
  Main,
  Title,
  Subtitle,
  Button,
  TitleContainer,
  FeaturedImage,
  SideColor,
  Welcome,
  Div,
  Span,
  ButtonGroup,
} from "./style";
import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <Container>
      <SideColor />

      <Main>
        <TitleContainer>
          <Fade>
            <Title>We make digital beautiful</Title>
          </Fade>
          <Welcome>
            <Fade up>
              <Div />
            </Fade>
          </Welcome>
          <Subtitle>
            Every story we tell, every brand we build, and every interaction we
            create must not only look beautiful but has to feel and function
            beautifully, too. Crafted to perfection.
          </Subtitle>
          <ButtonGroup>
            <Button>Purchase</Button>
            <Button id="secondButton">Demo</Button>
          </ButtonGroup>
        </TitleContainer>
        <div />
      </Main>
    </Container>
  );
}
