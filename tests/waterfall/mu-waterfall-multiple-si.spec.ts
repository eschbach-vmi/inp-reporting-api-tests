import test from "@playwright/test";
import {
  createRequestUrlWithStructureItems,
  getEndpointSmokeTests,
} from "../../helper/smoke-test-helper";
import environment from "../../utils/environment";

// #region
const structureItemGuids = [
  environment.MU_BATCH_STRUCTURE_ITEM_GUID,
  environment.MU_CAMPAIGN_STRUCTURE_ITEM_GUID,
];
const startDateTime = "2025-04-01T00:00:00Z";
const endDateTime = "2025-04-06T00:00:00Z";
const module = "MultiUnit";

// Define the query parameter objects
const queryParamsBase = {
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

test.describe("INPREPORT-267: GET Waterfall Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/reports";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrlWithStructureItems(
        endpointName,
        queryParams,
        structureItemGuids
      );
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-268: GET Waterfall By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/dayReports";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrlWithStructureItems(
        endpointName,
        queryParams,
        structureItemGuids
      );
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-269: GET Waterfall By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/shiftReports";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrlWithStructureItems(
        endpointName,
        queryParams,
        structureItemGuids
      );
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-270: GET Waterfall By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/campaignReports";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrlWithStructureItems(
        endpointName,
        queryParams,
        structureItemGuids
      );
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});

test.describe("INPREPORT-271: GET Waterfall By Production Order Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/Waterfall/productionOrderReports";

  testCases.forEach(({ name, queryParams }) => {
    test(name, async ({ request }) => {
      const requestUrl = createRequestUrlWithStructureItems(
        endpointName,
        queryParams,
        structureItemGuids
      );
      await getEndpointSmokeTests(request, requestUrl);
    });
  });
});
