import { useQuery } from '@apollo/client'
import { List } from 'antd'
import { FC } from 'react'
import { Trail } from '../../api/types'
import TrailItem from './TrailItem'
import { GET_TRAILS } from '../../api/graphql/trails'

const TrailsList: FC<unknown> = () => {
    const { data, error } = useQuery<{ allTrails: Trail[] }>(GET_TRAILS)

    const renderListItem = (trail: Trail) => <TrailItem trail={trail} />
    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data?.allTrails}
                renderItem={renderListItem}
            />
        </div>
    )
}

export default TrailsList
