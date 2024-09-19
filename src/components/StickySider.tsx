import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StickySider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledSider
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        height: '100vh',
        overflow: 'auto',
      }}
      width={400}
      breakpoint="md"
    >
      {children}
    </StyledSider>
  );
};

export default StickySider;

const StyledSider = styled(Layout.Sider)`
  @media (max-width: 820px) {
    display: none;
  }
  padding: 20px;
`;
