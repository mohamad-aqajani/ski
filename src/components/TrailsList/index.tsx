import { FC } from "react";
import { TrailsListProps } from "../types";
import { Table, TableProps, Tag } from "antd";
import { Trail } from "../../api/types";

const columns: TableProps<Trail>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Difficulty",
    dataIndex: "difficulty",
    key: "difficulty",
  },
  {
    title: "Groomed",
    dataIndex: "groomed",
    key: "groomed",
  },
  {
    title: "Number Of Lists",
    dataIndex: "numberOfLifts",
    key: "numberOfLifts",
  },
  {
    title: "Lift Elevation Gain",
    key: "liftsElevationGain",
    render: (_, { accessedByLifts }) =>
      accessedByLifts.map(({ elevationGain, id, name }) => (
        <Tag color={"blue"} key={id}>
          {name}: {elevationGain}
        </Tag>
      )),
  },
];

const TrailsList: FC<TrailsListProps> = ({ trails }) => {
  return <Table columns={columns} dataSource={trails} />;
};

export default TrailsList;
