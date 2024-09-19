import { Button, Col, Drawer, Layout, theme, Typography } from 'antd'
import { FC, useState } from 'react'
// import useMainScreen from './useMainScreen'

import FilterWrapper from '../components/FilterWrapper'
import styled from 'styled-components'
import TrailsList from '../components/TrailsList'
import { FilterFilled } from '@ant-design/icons'

const Main: FC<unknown> = () => {
  const {
    token: { colorBgBase },
  } = theme.useToken()
  const [drawerVisible, setDrawerVisible] = useState(false)
  // const { trails, groupSize, setGroupSize, setLevel, getTrails, loading } =
  //   useMainScreen()
  return (
    <Layout>
      <StyledSider width={400} breakpoint="md">
        <FilterWrapper />
      </StyledSider>
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
        closable={false}
        onClose={() => setDrawerVisible(false)}
        width={400}
        open={drawerVisible}
      >
        <FilterWrapper />
      </Drawer>
    </Layout>
  )
}

export default Main

const StyledBackground = styled.div`
  background-color: ${({ theme }) => theme.antd.colorBgBase};
  display: flex;
  flex: 1;
`

const StyledSider = styled(Layout.Sider)`
  @media (max-width: 820px) {
    display: none;
  }
  padding: 20px;
`
const SideTrigger = styled(Button)`
  width: 100px;
  height: 40px;
  margin: 20px;
  @media (min-width: 820px) {
    display: none;
  }
`
