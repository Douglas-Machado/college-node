import { UniversitiesModel } from "./UniversitiesModel"

const universitiesModel = new UniversitiesModel

describe('Universities', () => {
  test('should reject when an invalid id is used', async () => {
    await expect(universitiesModel.delete("aaa")).rejects.toThrow()
  }, 60000)
})