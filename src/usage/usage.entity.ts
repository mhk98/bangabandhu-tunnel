import { stringify } from 'querystring';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Any } from 'typeorm';
  
@Entity()
export class usagetbl {
    @PrimaryGeneratedColumn("uuid")
    Usage_ID: string;

    @Column()
    Card_ID: string;

    @Column({type:'datetime'})
    Transac_Time: Date;

    @Column()
    Transac_Amount: number;
 
    @Column()
    Last_Vehicle: string;
  
    @Column()
    Toll_Gate_No: string;
    
    @Column()
    Tunnel_Entry_Point: string;
    
    @Column()
    Transac_status: string;

  
}