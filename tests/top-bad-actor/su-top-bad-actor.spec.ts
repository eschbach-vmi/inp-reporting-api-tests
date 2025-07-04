import test from "@playwright/test";
import {
  createRequestUrl,
  getEndpointSmokeTests,
} from "../../helper/smoke-test-helper";
import environment from "../../utils/environment";

// #region
const structureItemGuid = environment.SU_PRODUCTION_STRUCTURE_ITEM_GUID;
const startDateTime = "2025-04-01T00:00:00Z";
const endDateTime = "2025-04-15T00:00:00Z";
const module = "SingleUnit";

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

test.describe("@single INPREPORT-257: GET TopBadActor Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/report";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("@single INPREPORT-258: GET TopBadActor By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/dayReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("@single INPREPORT-259: GET TopBadActor By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/shiftReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("@single INPREPORT-260: GET TopBadActor By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/campaignReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("@single INPREPORT-261: GET TopBadActor By Production Order Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/productionOrderReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("@single INPREPORT-308: GET TopBadActor Combit Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/legacy/report";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-309: GET TopBadActor By Production Order Combit Report Smoke Tests", () => {
  const endpointName =
    "/inpReporting/v1/TopBadActor/legacy/productionOrderReport";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrl(endpointName, queryParams);
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});
