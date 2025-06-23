import test from "@playwright/test";
import {
  createRequestUrlWithStructureItems,
  getEndpointSmokeTests,
} from "../../helper/smoke-test-helper";
import environment from "../../utils/environment";

// #region
const structureItemGuids = [
  environment.SU_PRODUCTION_STRUCTURE_ITEM_GUID,
  environment.SU_DOWNTIME_STRUCTURE_ITEM_GUID,
];
const startDateTime = "2025-04-01T00:00:00Z";
const endDateTime = "2025-04-06T00:00:00Z";
const module = "SingleUnit";

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

test.describe("@single INPREPORT-277: GET TopReasonCode Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/reports";

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

test.describe("@single INPREPORT-278: GET TopReasonCode By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/dayReports";

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

test.describe("@single INPREPORT-279: GET TopReasonCode By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/shiftReports";

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

test.describe("@single INPREPORT-280: GET TopReasonCode By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/campaignReports";

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

test.describe("@single INPREPORT-281: GET TopReasonCode By Production Order Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopReasonCode/productionOrderReports";

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
