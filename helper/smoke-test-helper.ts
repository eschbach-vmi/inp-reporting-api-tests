import { expect } from "@playwright/test";
import { logFailedRequestInfo } from "../helper/response-helper";

import { URLSearchParams } from "url";
import environment from "../utils/environment";

/**
 * Performs smoke tests for a GET endpoint.
 * @param request The Playwright request object.
 * @param requestUrl Defines the request URL.
 */
export async function getEndpointSmokeTests(request: any, requestUrl: string) {
  const response = await request.get(requestUrl, {});
  logFailedRequestInfo(response);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
}

const baseUrl = environment.BASE_URL;

/**
 * Creates a request URL with single structure item
 * @param endpointName The endpoint to append to the base URL.
 * @param queryParams An object representing the query parameters.
 * @returns The complete request URL as a string.
 */
export function createRequestUrl(
  endpointName: string,
  queryParams: any
): string {
  return `${baseUrl}${endpointName}?${new URLSearchParams(
    queryParams
  ).toString()}`;
}

/**
 * Creates a request URL with multiple structure items by appending structure item GUIDs to the query parameters.
 * @param endpointName The name of the endpoint.
 * @param queryParams The query parameters for the request.
 * @param structureItemGuids The structure item GUIDs to include in the request.
 * @returns The complete request URL.
 */
export function createRequestUrlWithStructureItems(
  endpointName: string,
  queryParams: Record<string, any>,
  structureItemGuids: string[]
): string {
  const urlParams = new URLSearchParams(queryParams);
  structureItemGuids.forEach((guid) =>
    urlParams.append("structureItemGuids", guid)
  );
  return `${baseUrl}${endpointName}?${urlParams.toString()}`;
}
