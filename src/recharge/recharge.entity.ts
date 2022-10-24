import { stringify } from 'querystring';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Any } from 'typeorm';
  
@Entity()
export class rechargetbl {
    @PrimaryGeneratedColumn("uuid")
    Recharge_ID: string;

    @Column()
    Card_ID: string;

    @Column()
    Transac_Using: string;

    @Column({type:'datetime'})
    Transac_Time: Date;
 
    @Column()
    Transac_Amount: number;
  
    @Column()
    Transac_status: string;

  
}