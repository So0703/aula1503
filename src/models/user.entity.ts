import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import Token from "./token.entity"

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string //! significa obrigatorio ? opcional

  @Column()
  email!: string

  @Column()
  password!: string

  @OneToMany(() => Token, token => token.user)
  tokens?: Token[]
}