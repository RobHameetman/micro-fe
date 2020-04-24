import { DecisionTree } from '../../types';

export const handleExit = async (
  _: DecisionTree,
  exit: Function = process.exit,
): Promise<void> => {
  exit(0);
};
