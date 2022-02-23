import { AutomationResults, TestCases, TestCycle, TestExecution, Statuses, Folders } from './index';

export class FullZephyrAPI {
  public automation;
  public testCases;
  public testCycle;
  public testExecution;
  public statuses;
  public folders;

  constructor() {
    this.statuses = new Statuses();
    this.folders = new Folders();
    this.automation = new AutomationResults();
    this.testCases = new TestCases();
    this.testCycle = new TestCycle();
    this.testExecution = new TestExecution();
  }
}
