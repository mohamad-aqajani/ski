import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.antd.colorBgBase};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StyledBackground;
