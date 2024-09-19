import { Card, Flex, List, Modal, Typography } from 'antd'

const TrailDetailsModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean
  onClose: () => void
}) => {
  const renderLiftItems = (item: any) => (
    <List.Item>
      <Typography.Text strong>{item}</Typography.Text>

      <Typography.Text> Lift</Typography.Text>
    </List.Item>
  )
  return (
    <Modal
      title="Trail Details"
      open={isVisible}
      onOk={onClose}
      onClose={onClose}
      onCancel={onClose}
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      <Card
        styles={{ body: { paddingTop: 0, paddingBottom: 0 } }}
        cover={<img src={require('../../assets/images/beginner.jpeg')} />}
      >
        <Flex vertical>
          <Typography.Title level={4}>Trail Name</Typography.Title>
          <Flex vertical gap={10}>
            <Typography.Text>
              Groomed: <Typography.Text strong>Yes</Typography.Text>
            </Typography.Text>
            <Typography.Text>
              Night: <Typography.Text strong>Yes</Typography.Text>
            </Typography.Text>
            <Typography.Title level={5}>Lifts</Typography.Title>
            <List dataSource={[1, 2, 3]} renderItem={renderLiftItems} />
          </Flex>
        </Flex>
      </Card>
    </Modal>
  )
}

export default TrailDetailsModal
