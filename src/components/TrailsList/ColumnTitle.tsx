import styled from 'styled-components'

const ColumnTitle = ({ title }: { title: string }) => {
    return <StyledTitle>{title}</StyledTitle>
}

export default ColumnTitle

const StyledTitle = styled.span`
    color: ${({ theme }) => theme.antd.colorBorderBg};
`
