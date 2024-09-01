import { FC } from "react";
import { Button, Flex, Space } from "antd";
import {
  SelectTrailLevel,
  Background,
  TrailsList,
  InputNumber,
} from "../components";
import useMainScreen from "./useMainScreen";
import styled from "styled-components";

const Main: FC<unknown> = () => {
  const { trails, groupSize, setGroupSize, setLevel, getTrails, loading } =
    useMainScreen();
  return (
    <Background>
      <Space direction="vertical" align="center" size={"large"}>
        <StyledFlex
          vertical
          gap={12}
          align="center"
        >
          <h2>Find Your Perfect Trail!</h2>
          {/* Group size */}
          <InputNumber
            onChange={(e) => setGroupSize(Number(e))}
            defaultValue={groupSize}
          />

          {/* Trail difficulty level */}
          <SelectTrailLevel onSelect={setLevel} />

          {/* Submit button */}
          <Button type="primary" block onClick={() => getTrails()} loading={loading}>
            Load Trails
          </Button>
        </StyledFlex>

        <TrailsList trails={trails} />
      </Space>
    </Background>
  );
};

export default Main;

const StyledFlex = styled(Flex)`
  width: 450px;
  max-width: 95vw;
`;
