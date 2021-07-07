import { BaseZephyrHelper } from './base';

export class TestCases extends BaseZephyrHelper {
  constructor() {
    super();
  }

  public async getTestCases() {
    const data = await this.methodGET('testcases');
    return data['body'];
  }

  public async getTestCase(key: string) {
    const data = await this.methodGET(`testcases/${key}`);
    return data['body'];
  }
}
