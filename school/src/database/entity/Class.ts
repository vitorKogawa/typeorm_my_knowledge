import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('class')
export default class Class {
    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({
        length: 100,
        unique: true
    })
    name: string;

    @Column()
    duration: number;

    @CreateDateColumn()
    created_At: Date;

    @UpdateDateColumn()
    update_At: Date;
}
