import { Col, Layout, theme } from 'antd'
import { FC } from 'react'
// import useMainScreen from './useMainScreen'

import FilterWrapper from '../components/FilterWrapper'
import styled from 'styled-components'
import TrailsList from '../components/TrailsList'

const Main: FC<unknown> = () => {
    const {
        token: { colorBgBase },
    } = theme.useToken()
    // const { trails, groupSize, setGroupSize, setLevel, getTrails, loading } =
    //   useMainScreen()
    return (
        <Layout>
            <StyledSlider width={400} breakpoint="md">
                <FilterWrapper />
            </StyledSlider>
            <Layout.Content>
               <TrailsList />
            </Layout.Content>
        </Layout>
    )
}

export default Main

const StyledBackground = styled.div`
    background-color: ${({ theme }) => theme.antd.colorBgBase};
    display: flex;
    flex: 1;
`

const StyledSlider = styled(Layout.Sider)`
    @media (max-width: 820px) {
        display: none;
    }
    padding: 20px;
`
