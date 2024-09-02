import { FC } from 'react'
import { InputNumberProps, InputNumber as AntdInputNumber } from 'antd'
import styled from 'styled-components'

const InputNumber: FC<InputNumberProps> = (props) => {
    return (
        <StyledInputNumber
            min={1}
            max={100}
            placeholder="Enter group size"
            type="number"
            {...props}
        />
    )
}

export default InputNumber

const StyledInputNumber = styled(AntdInputNumber)`
    width: 100%;
`
