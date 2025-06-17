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
// #endregion

test.describe("INPREPORT-295: GET ProcessPerformanceMap Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/reports";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrlWithStructureItems(
      endpointName,
      queryParamsBase,
      structureItemGuids
    );
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-296: GET ProcessPerformanceMap By Day Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/dayReports";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrlWithStructureItems(
      endpointName,
      queryParamsBase,
      structureItemGuids
    );
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-297: GET ProcessPerformanceMap By Shift Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/shiftReports";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrlWithStructureItems(
      endpointName,
      queryParamsBase,
      structureItemGuids
    );
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-298: GET ProcessPerformanceMap By Campaign Report Smoke Tests", () => {
  const endpointName = "/inpReporting/v1/ProcessPerformanceMap/campaignReports";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrlWithStructureItems(
      endpointName,
      queryParamsBase,
      structureItemGuids
    );
    await getEndpointSmokeTests(request, requestUrl);
  });
});

test.describe("INPREPORT-299: GET ProcessPerformanceMap By Production Order Report Smoke Tests", () => {
  const endpointName =
    "/inpReporting/v1/ProcessPerformanceMap/productionOrderReports";

  test("positive case", async ({ request }) => {
    const requestUrl = createRequestUrlWithStructureItems(
      endpointName,
      queryParamsBase,
      structureItemGuids
    );
    await getEndpointSmokeTests(request, requestUrl);
  });
});
