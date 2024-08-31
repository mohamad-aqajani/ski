import { FC } from "react";
import { Button, Flex, Space } from "antd";
import { SelectTrailLevel, Background, TrailsList, InputNumber } from "../components";

const Main: FC<unknown> = () => {
  return (
    <Background>
      <Space direction="vertical" align="center" size={"large"}>
        <Flex
          vertical
          gap={12}
          align="center"
          style={{ width: "450px", maxWidth: "95%" }}
        >
          {/* Group size */}
          <InputNumber />

          {/* Trail difficulty level */}
          <SelectTrailLevel onSelect={() => {}} />

          {/* Submit button */}
          <Button type="primary" block>
            Search Trails
          </Button>
        </Flex>

      </Space>
    </Background>
  );
};

export default Main;
