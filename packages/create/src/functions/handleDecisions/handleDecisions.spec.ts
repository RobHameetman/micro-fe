import chalk from 'chalk';
import { handleDecisions } from './handleDecisions';
import { createDecisionTree } from '../../types';
import { Actions } from './../../enums';
import { handleExitStub } from './__test__';

describe(chalk`handleDecisions()`, (): void => {
  describe(chalk`given {cyan Actions.Exit}`, (): void => {
    beforeEach((): void => {
      handleDecisions(
        createDecisionTree({ action: Actions.Exit }),
        handleExitStub,
      );
    });

    it(chalk`should exit with a zero exit code`, (): void => {
      expect(handleExitStub).toHaveBeenCalled();
    });
  });
});
