# Zephyr-api Library

[![npm version](https://badge.fury.io/js/zephyr-api-wrapper.svg)](https://badge.fury.io/js/zephyr-api-wrapper)
[![Known Vulnerabilities](https://snyk.io/test/github/juangm/zephyr-api/badge.svg)](https://snyk.io/test/github/juangm/zephyr-api)

## Overview

- **zephyr-api** is a wrapper around Zephyr Scale Cloud REST API to automated tasks, test-cycles creations, etc. in JIRA.

## Requirements

- Requires Node.js 14+
- Set env with zephyr toke `ZEPHYR_TOKEN=XXXXXXXXX`

## Documentation

API specification can be found in -> [zephyr-spec](https://support.smartbear.com/zephyr-scale-cloud/api-docs/)

### Endpoints implemented

- :warning: Automation - partially done
- :warning: TestCycles - partially done
- :warning: TestCases - partially done
- :warning: TestExecution - partially done

### Example (using Typescript)

**_NOTE: Remember to set the environment variable ZEPHYR_TOKEN_**

To use a subset of calls for a specific endpoint:

```javascript
import { TestCycle } from 'zephyr-api-wrapper';

const api = new TestCycle();

api.getTestCycles().then((result) => {
  console.log(result);
});
```

To use all the possible calls for:

```javascript
import { FullZephyrAPI } from 'zephyr-api-wrapper';

const api = new FullZephyrAPI();

api.testCycles.getTestCycles().then((result) => {
  console.log(result);
});
```

## Future Plans

- [ ] Implement all the endpoints
- [ ] Add interfaces for responses/requests
- [ ] Implement tests to check basic functionality
- [ ] Create CI with github actions
