import { CheckCircleOutlined } from '@ant-design/icons';
import { ApolloError, useMutation } from '@apollo/client';
import { notification, Typography } from 'antd';
import { useState } from 'react';
import { SET_TRAIL_STATUS } from '../../api/graphql/trails';
import { Trail } from '../../api/types';

const useTrailItem = (trail: Trail) => {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotificationSuccess = () => {
    api.info({
      message: (
        <Typography.Text color="white" strong>
          Trail Reserved!
        </Typography.Text>
      ),
      description: (
        <Typography.Text color="white">
          Your reservation has been successfully made.
        </Typography.Text>
      ),
      placement: 'bottom',
      icon: <CheckCircleOutlined />,
      style: {
        color: 'lightgreen',
      },
      showProgress: true,
    });
  };

  const openNotificationError = (error: ApolloError) => {
    api.error({
      message: (
        <Typography.Text color="white" strong>
          Oops something went wrong!
        </Typography.Text>
      ),
      description: (
        <Typography.Text color="white">{error.message}</Typography.Text>
      ),
      placement: 'bottom',
      showProgress: true,
    });
  };

  const smallestElevationHeight = () =>
    trail.accessedByLifts.reduce(
      (acc, lift) => (acc < lift.elevationGain ? acc : lift.elevationGain),
      Number.MAX_SAFE_INTEGER
    );

  const [mutateReservation] = useMutation(SET_TRAIL_STATUS, {
    onCompleted: () => {
      openNotificationSuccess();
    },

    onError: (error) => {
      openNotificationError(error);
    },
  });

  const onReserve = () => {
    mutateReservation({
      variables: {
        id: trail.id,
        status: 'CLOSED',
      },
    });
    setIsDetailsModalVisible(false);
  };

  return {
    isDetailsModalVisible,
    setIsDetailsModalVisible,
    smallestElevationHeight,
    onReserve,
    contextHolder,
  };
};

export default useTrailItem;
