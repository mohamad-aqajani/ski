import { Button, Drawer, Layout } from 'antd';
import { FC, useState } from 'react';
import { FilterFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { FilterWrapper, TrailsList } from '../components';
import StickySider from '../components/StickySider';

const Main: FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Layout>
      <StickySider>
        <FilterWrapper />
      </StickySider>
      <Layout.Content>
        <SideTrigger type="primary" onClick={() => setDrawerVisible(true)}>
          <FilterFilled />
          Filter
        </SideTrigger>
        <TrailsList />
      </Layout.Content>
      <Drawer
        title="Filter"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        width={400}
        open={drawerVisible}
      >
        <FilterWrapper />
      </Drawer>
    </Layout>
  );
};

export default Main;

const SideTrigger = styled(Button)`
  width: 100px;
  height: 40px;
  margin: 20px;
  @media (min-width: 820px) {
    display: none;
  }
`;
