import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Card, Flex, List, notification, Typography } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import TrailDetailsModal from '../TrailDetailsModal'
import TrailLevelTag from './TrailLevelTag'
import { Lift, Trail } from '../../api/types'
import { SET_TRAIL_STATUS } from '../../api/graphql/trails'
import { ApolloError, useMutation } from '@apollo/client'

const TrailItem = ({ trail }: { trail: Trail }) => {
    const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)

    const [api, contextHolder] = notification.useNotification()

    const openNotificationSuccess = () => {
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

    const openNotificationError = (error: ApolloError) => {
        api.error({
            message: (
                <Typography.Text color="white" strong>
                    Oops something went wrong!
                </Typography.Text>
            ),
            description: (
                <Typography.Text color="white">{error.message}</Typography.Text>
            ),
            placement: 'bottom',
            showProgress: true,
        })
    }

    const smallestElevationHeight = () =>
        trail.accessedByLifts.reduce(
            (acc, lift) =>
                acc < lift.elevationGain ? acc : lift.elevationGain,
            Number.MAX_SAFE_INTEGER
        )

    const [mutateReservation] = useMutation(SET_TRAIL_STATUS, {
        onCompleted: () => {
            openNotificationSuccess()
        },

        onError: (error) => {
            openNotificationError(error)
        },
    })

    const onReserve = () => {
        mutateReservation({
            variables: {
                id: trail.id,
                status: 'CLOsSED',
            },
        })
        setIsDetailsModalVisible(false)
    }
    return (
        <List.Item>
            <StyledCard
                hoverable
                onClick={() => setIsDetailsModalVisible(true)}
            >
                <ItemWrapper>
                    <TagWrapper>
                        <TrailLevelTag difficulty={trail.difficulty} />
                    </TagWrapper>
                    <CoverImage
                        src={require(
                            `../../assets/images/${trail.difficulty}.jpeg`
                        )}
                    />

                    <Flex vertical gap={16}>
                        <Typography.Title level={4}>
                            {trail.name}
                        </Typography.Title>
                        <Flex vertical gap={10}>
                            <Typography.Text>
                                Groomed:{' '}
                                <Typography.Text strong>
                                    {trail.groomed ? 'YES' : 'NO'}
                                </Typography.Text>
                            </Typography.Text>
                            <Typography.Text>
                                Number of Lifts:{' '}
                                <Typography.Text strong>
                                    {trail.accessedByLifts.length}
                                </Typography.Text>
                            </Typography.Text>

                            <Typography.Text>
                                Smallest Elevation Height:{' '}
                                <Typography.Text strong>
                                    {smallestElevationHeight()}
                                </Typography.Text>
                            </Typography.Text>
                        </Flex>
                    </Flex>
                </ItemWrapper>
            </StyledCard>
            <TrailDetailsModal
                trail={trail}
                isVisible={isDetailsModalVisible}
                onClose={() => {
                    setIsDetailsModalVisible(false)
                }}
                onReserve={onReserve}
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
    width: 300px;
    height: 200px;
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
