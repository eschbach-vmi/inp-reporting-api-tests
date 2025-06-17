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
// #endregion

test.describe("INPREPORT-290: GET ProcessPerformanceMap Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/report";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrl(endpointName, queryParamsBase);
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-291: GET ProcessPerformanceMap By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/dayReport";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrl(endpointName, queryParamsBase);
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-292: GET ProcessPerformanceMap By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/shiftReport";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrl(endpointName, queryParamsBase);
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-293: GET ProcessPerformanceMap By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/campaignReport";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrl(endpointName, queryParamsBase);
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-294: GET ProcessPerformanceMap By Production Order Report Smoke Tests", () => {
  const endpointName =
    "/inpReporting/v1/ProcessPerformanceMap/productionOrderReport";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrl(endpointName, queryParamsBase);
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-300: GET ProcessPerformanceMap Combit Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/legacy/report";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrl(endpointName, queryParamsBase);
    await getEndpointSmokeTests(request, requestUrl);
  });
});
