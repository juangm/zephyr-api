import { BaseZephyrHelper } from './base';

export class Statuses extends BaseZephyrHelper {
  constructor() {
    super();
  }

  public async getStatuses(
    projectKey: string = '',
    maxResults: number = 10,
    startAt: number = 0,
    statusType: string = '',
  ) {
    const searchParams = {
      projectKey: projectKey === '' ? null : projectKey,
      statusType: statusType === '' ? null : statusType,
      maxResults: maxResults,
      startAt: startAt,
    };
    const data = await this.getQueryParameter(`statuses`, searchParams);
    return data['body'];
  }

  public async getStatusId(id: string) {
    const data = await this.methodGET(`statuses/${id}`);
    return data['body'];
  }
}
