import { Card, Flex, Image, List, Row, Space, Typography } from 'antd'
import styled from 'styled-components'

const TrailItem = () => {
    return (
        <List.Item>
            <StyledCard hoverable>
                <ItemWrapper>
                    <CoverImage
                        src={require('../../assets/images/beginner.jpeg')}
                    />

                    <Flex justify="space-between" vertical gap={12}>
                        <Typography.Title level={4}>
                            Trail Name
                        </Typography.Title>
                        <Typography.Text>
                            Groomed:{' '}
                            <Typography.Text strong>Yes</Typography.Text>
                        </Typography.Text>
                        <Typography.Text>
                            Number of Lifts:{' '}
                            <Typography.Text strong>3</Typography.Text>
                        </Typography.Text>

                        <Typography.Text>
                            Smallest Elevation Height:{' '}
                            <Typography.Text strong>3230</Typography.Text>
                        </Typography.Text>
                    </Flex>
                </ItemWrapper>
            </StyledCard>
        </List.Item>
    )
}

export default TrailItem

const StyledCard = styled(Card)`
    width: 100%;
    cursor: pointer;
`

const CoverImage = styled.img`
    border-radius: 8px;
`
const ItemWrapper = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`
