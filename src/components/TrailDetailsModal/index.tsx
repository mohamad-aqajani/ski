import { Card, Flex, List, Modal, Row, Tag, Typography } from 'antd'
import { Lift } from '../../api/types'
import { TrailsDetailModalProps } from './types'

const TrailDetailsModal = ({
  isVisible,
  onClose,
  trail,
  onReserve,
}: TrailsDetailModalProps) => {
  /** I'm separating this component because I want to test it with e2e test */
  const ReserveButtonText = () => (
    <Typography.Text style={{ color: 'white' }} data-cy="reserve-button" strong>
      Reserve
    </Typography.Text>
  )

  const renderLiftItems = (item: Lift) => (
    <List.Item>
      <Typography.Text strong>{item.name}</Typography.Text>

      <Typography.Text>{item.elevationGain}m</Typography.Text>
    </List.Item>
  )
  return (
    <Modal
      title={trail.name}
      open={isVisible}
      onOk={onReserve}
      onClose={onClose}
      onCancel={onClose}
      okText={<ReserveButtonText />}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <Card
        data-cy="trail-details-modal"
        cover={
          <img src={require(`../../assets/images/${trail.difficulty}.jpeg`)} />
        }
      >
        <Flex vertical>
          <Flex vertical gap={10}>
            <Row justify="space-between">
              <Typography.Text>
                Groomed:{' '}
                <Typography.Text strong>
                  {trail.groomed ? 'YES' : 'NO'}
                </Typography.Text>
              </Typography.Text>
              <Tag color={trail.status === 'OPEN' ? 'green' : 'red'}>
                {trail.status}
              </Tag>
            </Row>
            <Typography.Text>
              Night:{' '}
              <Typography.Text strong>
                {trail.night ? 'YES' : 'NO'}
              </Typography.Text>
            </Typography.Text>
            <Typography.Text>
              Trees:{' '}
              <Typography.Text strong>
                {trail.trees ? 'YES' : 'NO'}
              </Typography.Text>
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
