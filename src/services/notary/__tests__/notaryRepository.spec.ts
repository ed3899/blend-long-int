import { buildRepository } from '../notary.repository'
import { type NotaryBuildRepository, type NotaryRepository } from '../../../types/notary'

let mockGetRepository: NotaryBuildRepository
let mockRepository: NotaryRepository

describe('Notary Repository', () => {
  const notary = {
    id: 1,
    firstName: 'Notary 1',
    lastName: 'Notary 1',
    email: 'email_me@email.com',
    phoneNumber: '123-456-7890',
  }

  beforeEach(() => {
    mockGetRepository = {
      findOne: jest.fn(),
    }
    mockRepository = buildRepository(mockGetRepository)
  })

  test('should find a notary by id', async () => {
    mockGetRepository.findOne = jest.fn().mockResolvedValue(notary)
    const result = await mockRepository.findNotary(1)
    expect(result).toEqual(notary)
  })

  test.todo('should save a notary')

  test.todo('should update a notary')

  test.todo('should delete a notary')

   // Are there any other tests that could be useful?
})
