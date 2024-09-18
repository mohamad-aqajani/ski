import React, { FC } from 'react'
import { Select, Space, Typography } from 'antd'
import { SelectTrailLevelProps } from './types'
import { TrailDifficultyLevel } from '../api/types'
import styled from 'styled-components'

type Level = { key: string; value: TrailDifficultyLevel }
const TRAIL_DIFFICULTY_LEVELS: Level[] = [
  { key: 'Beginner', value: TrailDifficultyLevel.BEGINNER },
  { key: 'Intermediate', value: TrailDifficultyLevel.INTERMEDIATE },
  { key: 'Advanced', value: TrailDifficultyLevel.ADVANCED },
  { key: 'Expert', value: TrailDifficultyLevel.EXPERT },
]

const SelectTrailLevel: FC<SelectTrailLevelProps> = ({
  onSelect,
  defaultValue,
}) => {
  const renderOption = (level: Level) => (
    <Select.Option
      data-cy="difficulty-level-option"
      key={level.key}
      value={level.value}
    >
      {level.key}
    </Select.Option>
  )
  return (
    <Space direction="vertical">
      <Typography.Text strong>Difficulty Level</Typography.Text>
      <StyledSelect
        onChange={(value) => onSelect(value as TrailDifficultyLevel)}
        placeholder="Select Trail difficulty level"
        defaultValue={defaultValue}
        data-cy="trail-level-select"
      >
        {TRAIL_DIFFICULTY_LEVELS.map(renderOption)}
      </StyledSelect>
    </Space>
  )
}

export default SelectTrailLevel

const StyledSelect = styled(Select)`
  width: 100%;
`
