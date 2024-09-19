import { Button, Divider, Slider, Switch, Typography } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { useTrail } from '../../contexts/TrailContext/TrailContext';
import FullWidthFlex from '../FullWidthFlex';
import InputNumber from '../InputNumber';
import SelectTrailLevel from '../SelectTrailLevel';

const FilterWrapper: FC = () => {
  const {
    setGroupSize,
    setIsGroomed,
    setElevationRange,
    setLevel,
    resetFilters,
    /** state values */
    isGroomed,
    groupSize,
    elevationRange,
    level,
  } = useTrail();
  return (
    <FullWidthFlex vertical>
      <FullWidthFlex gap={10} vertical>
        <InputNumber
          label="Group Size"
          value={groupSize}
          onChange={(value) => setGroupSize(value as number)}
        />
        <SelectTrailLevel value={level} onSelect={setLevel} />
      </FullWidthFlex>
      <Divider />

      <FullWidthFlex justify="space-between" align="center">
        <Typography.Text strong>Groomed</Typography.Text>
        <Switch data-cy="groomed-switch-filter" value={isGroomed} onChange={setIsGroomed} />
      </FullWidthFlex>
      <Divider />
      <Typography.Text strong>Elevation Range</Typography.Text>
      <StyledSlider
        range
        min={100}
        max={4000}
        value={elevationRange}
        onChange={(value) => setElevationRange(value as [number, number])}
      />

      <Divider />
      <Button type="primary" block onClick={resetFilters}>
        Clear Filters
      </Button>
    </FullWidthFlex>
  );
};

export default FilterWrapper;

const StyledSlider = styled(Slider)``;
