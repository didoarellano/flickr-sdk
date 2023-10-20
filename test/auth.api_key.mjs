// @ts-check
import { describe, it } from "node:test"
import * as assert from "node:assert"
import { APIKeyAuth } from "flickr-sdk"

describe("auth/api_key", function () {
  describe("#sign", function () {
    it("adds the API key to a URL", async function () {
      const auth = new APIKeyAuth("abcd1234")
      const req = new Request("https://api.flickr.com/services/rest")
      const params = new Map()

      await auth.sign(req, params)

      assert.strictEqual(params.get("api_key"), "abcd1234")
    })

    it("calls a callback to receive the API key per-request", async function () {
      let apiKey = "abcd1234"

      const auth = new APIKeyAuth(() => apiKey)

      const req = new Request("https://api.flickr.com/services/rest")
      const params = new Map()

      await auth.sign(req, params)

      assert.strictEqual(params.get("api_key"), "abcd1234")

      apiKey = "efgh5678"

      await auth.sign(req, params)

      assert.strictEqual(params.get("api_key"), "efgh5678")
    })

    it("calls an async callback to receive the API key per-request", async function () {
      let apiKey = "abcd1234"

      const auth = new APIKeyAuth(async () => apiKey)

      const req = new Request("https://api.flickr.com/services/rest")
      const params = new Map()

      await auth.sign(req, params)

      assert.strictEqual(params.get("api_key"), "abcd1234")

      apiKey = "efgh5678"

      await auth.sign(req, params)

      assert.strictEqual(params.get("api_key"), "efgh5678")
    })
  })
})
