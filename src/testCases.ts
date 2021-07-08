import { BaseZephyrHelper } from './base';

export class TestCases extends BaseZephyrHelper {
  constructor() {
    super();
  }

  public async getTestCases(
    projectId: string = '',
    folderId: number = 0,
    maxResults: number = 10,
    startAt: number = 0,
  ) {
    const searchParams = {
      projectKey: projectId === '' ? null : projectId,
      folderId: folderId === 0 ? null : folderId,
      maxResults: maxResults,
      startAt: startAt,
    };
    const data = await this.getQueryParameter('testcases', searchParams);
    return data['body'];
  }

  public async getTestCase(key: string) {
    const data = await this.methodGET(`testcases/${key}`);
    return data['body'];
  }

  public async getTestCaseLinks(key: string) {
    // Returns links for a test case with specified key.
    const data = await this.methodGET(`testcases/${key}/links`);
    return data['body'];
  }

  public async getTestCaseVersions(key: string) {
    // Returns all test case versions for a test case with specified key.
    // Response is ordered by most recent first.
    const data = await this.methodGET(`testcases/${key}/versions`);
    return data['body'];
  }

  public async getVersionTestCase(key: string, version: string) {
    //Retrieves a specific version of a test case.
    const data = await this.methodGET(`testcases/${key}/versions/${version}`);
    return data['body'];
  }

  public async getTestCaseScript(key: string) {
    // Returns the test script for the given test case
    const data = await this.methodGET(`testcases/${key}/testscript`);
    return data['body'];
  }

  public async getTestCaseSteps(key: string) {
    // Returns the test steps for the given test case. Provides a paged response, with 100 items per page.
    const data = await this.methodGET(`testcases/${key}/teststeps`);
    return data['body'];
  }

  public async createTestCase(projectKey: string, name: string, opts = {}) {
    const body = {
      projectKey: projectKey,
      name: name,
      ...opts,
    };
    const data = await this.postJson('testcases', body);
    return data['body'];
  }

  public async createIssueLink(key: string, issueId: string, type: string = 'COVERAGE') {
    const data = await this.postJson(`testcases/${key}/links/issues`, { issueId: issueId, type: type });
    return data['body'];
  }

  public async createWebLink(key: string, url: string, description: string, type: string = 'COVERAGE') {
    const data = await this.postJson(`testcases/${key}/links/weblinks`, {
      url: url,
      description: description,
      type: type,
    });
    return data['body'];
  }

  public async createTestScript(key: string, text: string, type: string = 'plain') {
    if (!['plain', 'bdd', 'steps'].includes(type)) {
      throw `Type should be 'plain', 'bdd' or 'steps'`;
    }
    const data = await this.postJson(`testcases/${key}/links/testscript`, {
      text: text,
      type: type,
    });
    return data['body'];
  }

  public async createTestSteps(key: string, steps: any[], mode: string = 'APPEND') {
    if (!['APPEND', 'OVERWRITE'].includes(mode)) {
      throw `Type should be 'plain', 'bdd' or 'steps'`;
    }
    const data = await this.postJson(`testcases/${key}/links/teststeps`, {
      mode: mode,
      steps: steps,
    });
    return data['body'];
  }
}
