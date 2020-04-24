import chalk from 'chalk';
import { handleExit } from './handleExit';
import { createDecisionTree } from '../../types';
import { stub } from './__test__';

describe(chalk`handleExit()`, (): void => {
  describe(chalk`given {cyan PublicProjects.Packages}`, (): void => {
    beforeEach((): void => {
      handleExit(createDecisionTree(), stub);
    });

    it(
      chalk`should open the project in the user's default browser`,
      (): void => {
        expect(stub).toHaveBeenCalled();
      },
    );
  });
});
