import { Entity, Column } from 'typeorm'
import { BaseEntity } from './Base.entity'
import { NotaryEntity } from '../types/notary'

@Entity()
export class Notary extends BaseEntity implements NotaryEntity {
  @Column({ type: 'varchar' })
    firstName!: string

  @Column({ type: 'varchar' })
    lastName!: string

  @Column({ type: 'varchar' })
    email!: string

  @Column({ type: 'varchar' })
    phoneNumber!: string
}
