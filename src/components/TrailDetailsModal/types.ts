import { Trail } from '../../api/types';

export type TrailsDetailModalProps = {
  isVisible: boolean;
  onClose: () => void;
  trail: Trail;
  onReserve: () => void;
};
