import { type Notary } from '../entities'
import { type Repository } from 'typeorm'

export interface NotaryEntity {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
}

/**
 * CreateNotary is a type that represents the data needed to create a new notary.
 */
export type CreateNotary = Omit<NotaryEntity, 'id' | 'createdAt' | 'updatedAt'>
/**
 * UpdateNotary is a type that represents the data needed to update a notary.
 */
export type UpdateNotary = Partial<CreateNotary> & Pick<NotaryEntity, 'id'>
/**
 * NotaryBuildRepository is a type that represents the methods available on the notary repository.
 * Used for Dependency Injection/Testing so we only have to mock the methods we use from the typeorm repository.
 */
export type NotaryBuildRepository = Pick<Repository<Notary>, 'findOne' >
/**
 * NotaryRepository is a type that represents the methods available on the notary repository.
 */
export interface NotaryRepository {
  /**
 * Finds notary by id.
 * @param id {number} Id of the notary
 */
  findNotary: (id: number) => Promise<NotaryEntity | null>
  /**
 * Creates a new notary.
 */
  saveNotary: (notary: CreateNotary) => Promise<NotaryEntity>

  /**
 * Updates a notary.
 */
  updateNotary: (notary: UpdateNotary) => Promise<void>
  /**
 * Deletes a notary by id.
 */
  deleteNotary: (id: number) => Promise<void>
}
