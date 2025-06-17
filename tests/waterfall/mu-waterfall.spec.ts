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

test.describe("INPREPORT-252: GET Waterfall Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/report";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-253: GET Waterfall By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/dayReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-254: GET Waterfall By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/shiftReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-255: GET Waterfall By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/campaignReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-256: GET Waterfall By Production Order Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/productionOrderReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-310: GET Waterfall Combit Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/legacy/report";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-311: GET Waterfall By Production Order Combit Report Smoke Tests", () => {
  const endpointName =
    "/inpReporting/v1/Waterfall/legacy/productionOrderReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});
