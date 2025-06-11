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
const endDateTime = "2025-05-01T00:00:00Z";
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

test.describe("INPREPORT-272: GET TopBadActor Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/reports";

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

test.describe("INPREPORT-273: GET TopBadActor By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/dayReports";

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

test.describe("INPREPORT-274: GET TopBadActor By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/shiftReports";

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

test.describe("INPREPORT-275: GET TopBadActor By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/campaignReports";

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

test.describe("INPREPORT-276: GET TopBadActor By Production Order Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/TopBadActor/productionOrderReports";

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
