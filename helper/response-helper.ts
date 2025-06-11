import { APIResponse } from "@playwright/test";
import { expect } from "@playwright/test";

/**
 * Logs information about the response if the request failed.
 * @param response Defines the response to log.
 */
export async function logFailedRequestInfo(response: APIResponse) {
  let logText = "";

  if (!response.ok()) {
    logText += "Response URL: " + response.url();
    logText += "\n";
    logText += "Response header: ";
    logText += "\n";
    response
      .headersArray()
      .map((header) => console.log(header.name + ": " + header.value));
    logText += "Response status code: " + response.status();
    logText += "\n";

    const body = await response.body();

    if (!body.includes("<!DOCTYPE html>")) {
      logText += "Response Body: " + body;
      logText += "\n";
    }

    console.log(logText);
  }
}

// /**
//  * Checks the response for a failed login.
//  * @param response Defines the response to check.
//  */
// export function checkForFailedLogin(response: APIResponse) {
//   expect(response.ok()).toBeFalsy();
//   expect(response.status()).toBe(401);
// }
