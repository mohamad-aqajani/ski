import { Card, Flex, List, Typography } from 'antd';
import styled from 'styled-components';
import { Trail } from '../../api/types';

import TrailLevelTag from '../TrailLevelTag';
import useTrailItem from './useTrailItem';
import TrailDetailsModal from '../TrailDetailsModal';

const TrailItem = ({ trail }: { trail: Trail }) => {
  const {
    isDetailsModalVisible,
    setIsDetailsModalVisible,
    contextHolder,
    onReserve,
    smallestElevationHeight,
  } = useTrailItem(trail);
  return (
    <List.Item>
      <StyledCard hoverable onClick={() => setIsDetailsModalVisible(true)}>
        <ItemWrapper>
          <TagWrapper>
            <TrailLevelTag difficulty={trail.difficulty} />
          </TagWrapper>
          <CoverImage
            src={require(`../../assets/images/${trail.difficulty}.jpeg`)}
          />

          <Flex vertical gap={16}>
            <Typography.Title level={4}>{trail.name}</Typography.Title>
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
          setIsDetailsModalVisible(false);
        }}
        onReserve={onReserve}
      />
      {contextHolder}
    </List.Item>
  );
};

export default TrailItem;

const StyledCard = styled(Card)`
  width: 100%;
  cursor: pointer;
`;

const CoverImage = styled.img`
  border-radius: 8px;
  width: 300px;
  height: 200px;
`;
const ItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const TagWrapper = styled.div`
  position: absolute;
  top: 32px;
  left: 36px;
  z-index: 1;
`;
