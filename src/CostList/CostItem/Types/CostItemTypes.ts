import { type CostItemType, type CallbackFunction } from '../../Types/CostItemType'

export interface ICostItemLProps {
  item: CostItemType
  onDeleted: CallbackFunction
  key: number
};

export interface ICostItemState {
  count: number
}
