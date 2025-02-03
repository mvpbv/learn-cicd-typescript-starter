import { describe, expect, it } from 'vitest';
import { getAPIKey } from 'src/api/auth';


describe("getAPIKey", () => {
  it("should return null if no authorization header is present", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null if authorization header is present but does not start with 'ApiKey'", () => {
    const headers = { authorization: "Bearer someToken" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return null if authorization header is present but does not have a token", () => {
    const headers = { authorization: "ApiKey" };
    expect(getAPIKey(headers)).toBeNull();
  });

  it("should return the token if authorization header is present and starts with 'ApiKey'", () => {
    const headers = { authorization: "ApiKey someToken" };
    expect(getAPIKey(headers)).toBe("someToken");
  });
});