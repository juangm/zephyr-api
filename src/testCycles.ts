import { BaseZephyrHelper } from './base';

interface TestCycleData {
  projectKey: string;
  name: string;
  description: string;
  plannedStartDate: string;
  plannedEndDate: string;
  statusName: string;
}

export class TestCycle extends BaseZephyrHelper {
  constructor() {
    super();
  }

  public async getTestCycles() {
    const data = await this.methodGET('testcycles');
    return data['body'];
  }

  public async createTestCycle(cycleInfo: TestCycleData) {
    try {
      const data = await this.postJson('testcycles', cycleInfo);
      return data['body'];
    } catch (error) {
      console.error(`Error when doing the request: ${error}`);
      throw error;
    }
  }
}
