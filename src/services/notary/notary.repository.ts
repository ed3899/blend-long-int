import { AppDataSource } from '../../data-source'
import { Notary } from '../../entities'
import { type UpdateNotary, type CreateNotary, type NotaryRepository, type NotaryBuildRepository } from '../../types/notary'

/**
 * Function to build the notary repository. Used for Dependency Injection/Testing.
 * @param repository 
 * @returns 
 */
export function buildRepository (repository: NotaryBuildRepository = AppDataSource.getRepository(Notary)): NotaryRepository {
  
  async function findNotary (id: number): Promise<Notary | null> {
    return await repository.findOne({ where: [{ id }] })
  }

  async function saveNotary (notary: CreateNotary): Promise<Notary> {
    throw new Error('Not implemented')
  }

  async function updateNotary (notary: UpdateNotary): Promise<void> {
    throw new Error('Not implemented')
  }

  async function deleteNotary (): Promise<void> {
    throw new Error('Not implemented')
  }

  async function searchNotary (): Promise<Notary[]> {
    throw new Error('Not implemented')
  }

  return {
    findNotary,
    saveNotary,
    updateNotary,
    deleteNotary,
  }
}

/**
 * Notary Repository used for all notary related db operations.
 */
export const notaryRepository: NotaryRepository = buildRepository()
