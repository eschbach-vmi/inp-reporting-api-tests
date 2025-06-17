import test from "@playwright/test";
import {
  createRequestUrl,
  getEndpointSmokeTests,
} from "../../helper/smoke-test-helper";
import environment from "../../utils/environment";

// #region
const structureItemGuid = environment.MU_BATCH_STRUCTURE_ITEM_GUID;
const startDateTime = "2025-04-01T00:00:00Z";
const endDateTime = "2025-04-15T00:00:00Z";
const module = "MultiUnit";

// Define the query parameter objects
const queryParamsBase = {
  structureItemGuid: structureItemGuid,
  reportStartDateTime: startDateTime,
  reportEndDateTime: endDateTime,
  moduleIdentifier: module,
};

// Test data
const testCases = [
  {
    name: "Cached, from module API, with report items",
    queryParams: {
      ...queryParamsBase,
      useCaching: "true",
      retrieveReportDataFromModuleApi: "true",
      excludeReportItems: "false",
    },
  },
  {
    name: "Non-cached, from module API, without report items",
    queryParams: {
      ...queryParamsBase,
      useCaching: "false",
      retrieveReportDataFromModuleApi: "true",
      excludeReportItems: "true",
    },
  },
  {
    name: "Cached, from DWH, with report items",
    queryParams: {
      ...queryParamsBase,
      useCaching: "true",
      retrieveReportDataFromModuleApi: "false",
      excludeReportItems: "false",
    },
  },
  {
    name: "Non-cached, from DWH, without report items",
    queryParams: {
      ...queryParamsBase,
      useCaching: "false",
      retrieveReportDataFromModuleApi: "false",
      excludeReportItems: "true",
    },
  },
];
// #endregion

test.describe("INPREPORT-262: GET TopReasonCode Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/report";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-263: GET TopReasonCode By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/dayReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-264: GET TopReasonCode By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/shiftReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-265: GET TopReasonCode By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/campaignReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-266: GET TopReasonCode By Production Order Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/productionOrderReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-310: GET TopReasonCode Combit Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/legacy/report";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-311: GET TopReasonCode By Production Order Combit Report Smoke Tests", () => {
  const endpointName =
    "/inpReporting/v1/TopReasonCode/legacy/productionOrderReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});
