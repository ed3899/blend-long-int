import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('increment')
    id!: number

  @CreateDateColumn()
  readonly createdAt!: Date

  @UpdateDateColumn()
  readonly updatedAt!: Date

  @DeleteDateColumn()
  readonly deletedAt!: Date
}
