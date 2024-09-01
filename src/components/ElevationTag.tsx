import { Tag, theme } from "antd";
import { useMemo } from "react";

const ElevateTag = ({
  id,
  name,
  elevationGain,
}: {
  id: string;
  name: string;
  elevationGain: number;
}) => {
  const {
    token: { green, orange, red },
  } = theme.useToken();

  /**
   * This function will return the color of the tag based on the elevation gain
   * @returns {string} color
   */
  const color = useMemo(() => {
    if (elevationGain < 500) {
      return green;
    } else if (elevationGain < 1000) {
      return orange;
    } else {
      return red;
    }
  }, [elevationGain, green, orange, red]);

  return (
    <Tag color={color} key={id}>
      {name}: {elevationGain}m
    </Tag>
  );
};

export default ElevateTag;
