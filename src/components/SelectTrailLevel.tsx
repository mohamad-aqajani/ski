import { Select, Space, Typography } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { TrailDifficultyLevel } from '../api/types';
import { SelectTrailLevelProps } from './types';

type Level = { key: string; value: TrailDifficultyLevel };
const TRAIL_DIFFICULTY_LEVELS: Level[] = [
  { key: 'Beginner', value: TrailDifficultyLevel.BEGINNER },
  { key: 'Intermediate', value: TrailDifficultyLevel.INTERMEDIATE },
  { key: 'Advanced', value: TrailDifficultyLevel.ADVANCED },
  { key: 'Expert', value: TrailDifficultyLevel.EXPERT },
];

const SelectTrailLevel: FC<SelectTrailLevelProps> = ({ onSelect, value }) => {
  const renderOption = (level: Level) => (
    <Select.Option
      data-cy="difficulty-level-option"
      key={level.key}
      value={level.value}
    >
      {level.key}
    </Select.Option>
  );
  return (
    <Space direction="vertical">
      <Typography.Text strong>Difficulty Level</Typography.Text>
      <StyledSelect
        onChange={(value) => onSelect(value as TrailDifficultyLevel)}
        placeholder="Select Trail difficulty level"
        value={value}
        data-cy="trail-level-select"
      >
        {TRAIL_DIFFICULTY_LEVELS.map(renderOption)}
      </StyledSelect>
    </Space>
  );
};

export default SelectTrailLevel;

const StyledSelect = styled(Select)`
  width: 100%;
`;
