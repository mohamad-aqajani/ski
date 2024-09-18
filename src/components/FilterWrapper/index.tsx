import { Divider, Flex, Slider, Switch, Typography } from 'antd'
import { FC } from 'react'
import SelectTrailLevel from '../SelectTrailLevel'
import styled from 'styled-components'
import InputNumber from '../InputNumber'
import FullWidthFlex from '../FullWidthFlex'

const FilterWrapper: FC<unknown> = () => {
    return (
        <FullWidthFlex vertical>
            <FullWidthFlex gap={10} vertical>
                <InputNumber label="Group Size" defaultValue={1} />
                <SelectTrailLevel onSelect={() => {}} />
            </FullWidthFlex>
            <Divider />

            <FullWidthFlex justify="space-between" align="center">
                <Typography.Text strong>Groomed</Typography.Text>
                <Switch defaultChecked />
            </FullWidthFlex>
            <Divider />
            <Typography.Text strong>Elevation Range</Typography.Text>
            <StyledSlider
                range
                min={100}
                max={3000}
                defaultValue={[500, 2500]}
            />
        </FullWidthFlex>
    )
}

export default FilterWrapper



const StyledSlider = styled(Slider)``
