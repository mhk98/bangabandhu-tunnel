import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class cardtbl {
  @PrimaryGeneratedColumn('uuid')
  Card_ID: string;

  @Column({ length: 50 })
  Device_Type: string;

  @Column({ length: 50 })
  Physical_ID: string;

  @Column()
  User_ID: string;

  @Column()
  Issue_Date: Date;
  @Column()
  Expire_Date: Date;
  @Column()
  Balance: number;
  @Column()
  last_recharge_amount: number;
  @Column({ type: 'datetime' })
  last_recharge_time: Date;

  @Column()
  status: string;
}
