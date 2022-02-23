import { BaseZephyrHelper } from './base';

export class AutomationResults extends BaseZephyrHelper {
  constructor() {
    super();
  }

  public async publishCucumber(projectId: string, jsonResults) {
    const data = await this.postFileParams('automations/executions/cucumber', { projectKey: projectId }, jsonResults);
    return data['body'];
  }

  public async publishJUnit(projectId: string, junitFile: string) {
    const data = await this.postFileParams('automations/executions/junit', { projectKey: projectId }, junitFile);
    return data;
  }

  public async publishCustomFormat(projectId: string, customFile: string) {
    const data = await this.postFileParams('automations/executions/junit', { projectKey: projectId }, customFile);
    return data;
  }
}
