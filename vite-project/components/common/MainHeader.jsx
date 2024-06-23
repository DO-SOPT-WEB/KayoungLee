import * as M from "./MainHeaderStyle";

// eslint-disable-next-line react/prop-types
const MainHeader = ({ children }) => (
  <M.Wrapper>
    <h2>{children}</h2>
  </M.Wrapper>
);

export default MainHeader;
