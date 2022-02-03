import styled, { StyledComponent } from "styled-components";

const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

const Left = styled.div``;

const Right = styled.div``;

const Navbar: React.FC = () => {
  return (
    <Container>
      <Left>LOGO.</Left>
      <Right>Something cool</Right>
    </Container>
  );
};

export default Navbar;
