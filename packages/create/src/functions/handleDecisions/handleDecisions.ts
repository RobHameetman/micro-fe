import { DecisionTree } from '../../types';
import { Actions } from './../../enums';
import { handleExit as _handleExit } from '../handleExit';

export const handleDecisions = async (
  decisions: DecisionTree,
  handleExit: Function = _handleExit,
): Promise<void> => {
  switch (decisions.action) {
    case Actions.Exit:
      handleExit(decisions);
      break;
    default:
      break;
  }
};
