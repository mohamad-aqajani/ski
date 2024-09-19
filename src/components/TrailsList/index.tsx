import { List } from 'antd';
import { FC } from 'react';
import { Trail } from '../../api/types';
import TrailItem from './TrailItem';
import { useTrail } from '../../contexts/TrailContext/TrailContext';

const TrailsList: FC = () => {
  const { trails } = useTrail();
  const renderListItem = (trail: Trail) => <TrailItem trail={trail} />;
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={trails}
        renderItem={renderListItem}
        data-cy="list-trails"
      />
    </div>
  );
};

export default TrailsList;
