import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
  
@Entity()
export class lost_historytbl {
    @PrimaryGeneratedColumn("uuid")
    lostHistory_ID: string;

    @Column()
    Card_ID: string;

    @Column()
    User_ID: string;

    @Column()
    Lost_Date: Date;
 
    @Column()
    Last_Balance: number;
  
    @Column()
    Balance_Transferred: string;

    @Column()
    Card_Issue: string;
}