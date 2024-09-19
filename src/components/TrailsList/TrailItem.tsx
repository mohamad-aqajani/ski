import { CheckCircleOutlined } from '@ant-design/icons'
import { Card, Flex, List, notification, Typography } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import TrailDetailsModal from '../TrailDetailsModal'
import TrailLevelTag from './TrailLevelTag'

const TrailItem = () => {
    const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)

    const [api, contextHolder] = notification.useNotification()

    const openNotification = () => {
        api.info({
            message: (
                <Typography.Text color="white" strong>
                    Trail Reserved!
                </Typography.Text>
            ),
            description: (
                <Typography.Text color="white">
                    Your reservation has been successfully made.
                </Typography.Text>
            ),
            placement: 'bottom',
            icon: <CheckCircleOutlined />,
            style: {
                color: 'lightgreen',
            },
            showProgress: true,
        })
    }

    return (
        <List.Item>
            <StyledCard
                hoverable
                onClick={() => setIsDetailsModalVisible(true)}
            >
                <ItemWrapper>
                    <TagWrapper>
                        <TrailLevelTag />
                    </TagWrapper>
                    <CoverImage
                        src={require('../../assets/images/beginner.jpeg')}
                    />

                    <Flex vertical gap={16}>
                        <Typography.Title level={4}>
                            Trail Name
                        </Typography.Title>
                        <Flex vertical gap={10}>
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
                    </Flex>
                </ItemWrapper>
            </StyledCard>
            <TrailDetailsModal
                isVisible={isDetailsModalVisible}
                onClose={() => {
                    setIsDetailsModalVisible(false)
                    openNotification()
                }}
            />
            {contextHolder}
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
