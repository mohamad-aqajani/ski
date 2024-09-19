import { InputNumber as AntdInputNumber, Space, Typography } from 'antd';
import { FC } from 'react';
import styled from 'styled-components';
import { StyledInputNumberProps } from './types';

const InputNumber: FC<StyledInputNumberProps> = (props) => {
  return (
    <Space direction="vertical">
      <Typography.Text strong>{props.label}</Typography.Text>
      <StyledInputNumber
        min={1}
        max={100}
        placeholder="Enter group size"
        type="number"
        {...props}
      />
    </Space>
  );
};

export default InputNumber;

const StyledInputNumber = styled(AntdInputNumber)`
  width: 100%;
`;
