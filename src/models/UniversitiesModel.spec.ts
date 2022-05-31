import { UniversitiesModel } from "./UniversitiesModel"

const mockId = "62969578609ae1a4f69911c9"

const universitiesModel = new UniversitiesModel

describe('Universities', () => {

  test('should reject when an invalid id is used', async () => {
    await expect(universitiesModel.delete("aaa")).rejects.toThrow()
  })
})