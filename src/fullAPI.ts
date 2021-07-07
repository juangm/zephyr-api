import { AutomationResults, TestCases, TestCycle, TestExecution } from './index';

export class FullZephyrAPI {
  public automation;
  public testCases;
  public testCycle;
  public testExecution;

  constructor() {
    this.automation = new AutomationResults();
    this.testCases = new TestCases();
    this.testCycle = new TestCycle();
    this.testExecution = new TestExecution();
  }
}
