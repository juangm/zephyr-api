import { BaseZephyrHelper } from './base';

interface TestExecutionData {
  projectKey: string;
  testCaseKey: string;
  testCycleKey: string;
  statusName: string;
  environmentName: string;
  testScriptResults: {
    statusName: string;
    actualResult: string;
  }[];
}

export class TestExecution extends BaseZephyrHelper {
  constructor() {
    super();
  }

  public async getTestExecutions() {
    const data = await this.methodGET('testexecutions');
    return data['body'];
  }

  public async createTestExecution(executionInfo: TestExecutionData) {
    const data = await this.postJson('testexecutions', executionInfo);
    return data;
  }
}
