import { Card, Flex, List, Typography } from 'antd'
import styled from 'styled-components'
import TrailLevelTag from './TrailLevelTag'

const TrailItem = () => {
  return (
    <List.Item>
      <StyledCard hoverable>
        <ItemWrapper>
          <TagWrapper>
            <TrailLevelTag />
          </TagWrapper>
          <CoverImage src={require('../../assets/images/beginner.jpeg')} />

          <Flex vertical gap={16}>
            <Typography.Title level={4}>Trail Name</Typography.Title>
            <Flex vertical gap={10}>
              <Typography.Text>
                Groomed: <Typography.Text strong>Yes</Typography.Text>
              </Typography.Text>
              <Typography.Text>
                Number of Lifts: <Typography.Text strong>3</Typography.Text>
              </Typography.Text>

              <Typography.Text>
                Smallest Elevation Height:{' '}
                <Typography.Text strong>3230</Typography.Text>
              </Typography.Text>
            </Flex>
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

const TagWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 36px;
  z-index: 1;
`
