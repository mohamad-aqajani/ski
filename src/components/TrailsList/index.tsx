import { Modal, Table, TableProps } from 'antd'
import { FC, useState } from 'react'
import { Trail } from '../../api/types'
import ElevateTag from '../ElevationTag'
import { TrailsListProps } from '../types'
import ColumnTitle from './ColumnTitle'
import { SET_TRAIL_STATUS } from '../../api/graphql'
import { useMutation } from '@apollo/client'

const columns: TableProps<Trail>['columns'] = [
    {
        title: <ColumnTitle title="Name" />,
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: <ColumnTitle title="Difficulty" />,
        dataIndex: 'difficulty',
        key: 'difficulty',
    },
    {
        title: <ColumnTitle title="Groomed" />,
        key: 'groomed',
        render: (_, { groomed }) => (groomed ? 'Yes' : 'No'),
        responsive: ['lg'],
        align: 'center',
    },
    {
        title: <ColumnTitle title="Number of Lifts" />,
        key: 'numberOfLifts',
        render: (_, { accessedByLifts }) => accessedByLifts.length,
        align: 'center',
    },
    {
        title: <ColumnTitle title="Elevation Gain" />,
        key: 'liftsElevationGain',
        render: (_, { accessedByLifts }) =>
            accessedByLifts.map(({ elevationGain, id, name }) => (
                <ElevateTag
                    key={id}
                    name={name}
                    elevationGain={elevationGain}
                    id={id}
                />
            )),
        responsive: ['md'],
    },
]

const TrailsList: FC<TrailsListProps> = ({ trails }) => {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

    const [mutateReservation] = useMutation(SET_TRAIL_STATUS, {
        onCompleted: () => {
            setIsSuccessModalOpen(true)
        },
    })

    return (
        <div data-cy="success-modal">
            <Table
                style={{ cursor: 'pointer' }}
                columns={columns}
                dataSource={trails}
                onRow={(record) => ({
                    onClick: () =>
                        mutateReservation({
                            variables: { id: record.id, status: 'CLOSED' },
                        }),
                })}
            />
            <Modal
                title="Congrats!"
                open={isSuccessModalOpen}
                onOk={() => setIsSuccessModalOpen(false)}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <p>Thr trail is booked for you!</p>
            </Modal>
        </div>
    )
}

export default TrailsList
