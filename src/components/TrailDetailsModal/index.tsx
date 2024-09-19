import { Card, Flex, List, Modal, Typography } from 'antd'
import { Lift, Trail } from '../../api/types'
import { SET_TRAIL_STATUS } from '../../api/graphql/trails'

const TrailDetailsModal = ({
    isVisible,
    onClose,
    trail,
    onReserve,
}: {
    isVisible: boolean
    onClose: () => void
    trail: Trail
    onReserve: () => void
}) => {


    
    const renderLiftItems = (item: Lift) => (
        <List.Item>
            <Typography.Text strong>{item.name}</Typography.Text>

            <Typography.Text>{item.elevationGain}m</Typography.Text>
        </List.Item>
    )
    return (
        <Modal
            title="Trail Details"
            open={isVisible}
            onOk={onReserve}
            onClose={onClose}
            onCancel={onClose}
            cancelButtonProps={{ style: { display: 'none' } }}
        >
            <Card
                styles={{ body: { paddingTop: 0, paddingBottom: 0 } }}
                cover={
                    <img src={require(`../../assets/images/${trail.difficulty}.jpeg`)} />
                }
            >
                <Flex vertical>
                    <Typography.Title level={4}>{trail.name}</Typography.Title>
                    <Flex vertical gap={10}>
                        <Typography.Text>
                            Groomed:{' '}
                            <Typography.Text strong>{trail.groomed ? 'YES' : 'NO'}</Typography.Text>
                        </Typography.Text>
                        <Typography.Text>
                            Night: <Typography.Text strong>{trail.night ? 'YES': 'NO'}</Typography.Text>
                        </Typography.Text>
                        <Typography.Title level={5}>Lifts</Typography.Title>
                        <List
                            dataSource={trail.accessedByLifts}
                            renderItem={renderLiftItems}
                        />
                    </Flex>
                </Flex>
            </Card>
        </Modal>
    )
}

export default TrailDetailsModal
