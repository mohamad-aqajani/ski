import { Tag } from 'antd'
import { FC } from 'react'
import { TrailTagProps } from '../types'

const difficultyToColorMap: Record<string, string> = {
    beginner: 'green',
    intermediate: 'blue',
    advanced: 'orange',
    expert: 'red',
}

const TrailLevelTag: FC<TrailTagProps> = ({ difficulty }) => {
    return <Tag color={difficultyToColorMap[difficulty]}>{difficulty}</Tag>
}

export default TrailLevelTag
