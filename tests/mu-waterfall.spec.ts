import { test, expect } from "@playwright/test";
import environment from "../utils/environment";

function getDefaultParams() {
  return {
    structureItemGuid: environment.MU_STRUCTURE_ITEM_GUID,
    reportStartDateTime: environment.REPORT_START_DATE_TIME,
    moduleIdentifier: "MultiUnit",
    useCaching: "true",
    retrieveReportDataFromModuleApi: "true",
    excludeReportItems: "false",
  };
}

test("Generates a waterfall report: MultiUnit, cached, from module API, not exclude report items", async ({
  request,
}) => {
  const response = await request.get(
    `${environment.BASE_URL}/inpReporting/v1/Waterfall/report`,
    { params: getDefaultParams() }
  );

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseJson = await response.json();
  console.log(responseJson);

  expect(responseJson).toBeDefined();
  expect(responseJson).toHaveProperty("waterfallChart");
});

test("Generates a waterfall report by day: MultiUnit, cached, from module API, not exclude report items", async ({
  request,
}) => {
  const response = await request.get(
    `${environment.BASE_URL}/inpReporting/v1/Waterfall/dayReport`,
    { params: getDefaultParams() }
  );

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseJson = await response.json();
  console.log(responseJson);

  expect(responseJson).toBeDefined();
  expect(responseJson).toHaveProperty("waterfallChart");
});

test("Generates a waterfall report by shift: MultiUnit, cached, from module API, not exclude report items", async ({
  request,
}) => {});

test("Generates a waterfall report by campaign: MultiUnit, cached, from module API, not exclude report items", async ({
  request,
}) => {});

test("Generates a waterfall report by production order: MultiUnit, cached, from module API, not exclude report items", async ({
  request,
}) => {});
