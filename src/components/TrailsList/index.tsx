import { List } from 'antd'
import { FC } from 'react'
import TrailItem from './TrailItem'

const TrailsList: FC<unknown> = () => {
  const renderListItem = () => <TrailItem />
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={renderListItem}
      />
    </div>
  )
}

export default TrailsList
