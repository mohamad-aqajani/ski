import React, { FC } from "react";
import { Select } from "antd";
import { SelectTrailLevelProps } from "./types";
import { TrailDifficultyLevel } from "../api/types";
import styled from "styled-components";

type Level = { key: string; value: TrailDifficultyLevel };
const TRAIL_DIFFICULTY_LEVELS: Level[] = [
  { key: "Beginner", value: TrailDifficultyLevel.BEGINNER },
  { key: "Intermediate", value: TrailDifficultyLevel.INTERMEDIATE },
  { key: "Advanced", value: TrailDifficultyLevel.ADVANCED },
  { key: "Expert", value: TrailDifficultyLevel.EXPERT },
];

const SelectTrailLevel: FC<SelectTrailLevelProps> = ({ onSelect }) => {
  const renderOption = (level: Level) => (
    <Select.Option key={level.key} value={level.value}>
      {level.key}
    </Select.Option>
  );
  return (
    <StyledSelect
      onChange={(value) => onSelect(value as string)}
      placeholder="Select Trail difficulty level"
    >
      {TRAIL_DIFFICULTY_LEVELS.map(renderOption)}
    </StyledSelect>
  );
};

export default SelectTrailLevel;

const StyledSelect = styled(Select)`
  width: 100%;
`;
