import {
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinTable, 
    ManyToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import Class from "./Class";

@Entity('student')
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 45
    })
    name: string;

    @Column({
        length: 45
    })
    key: string;

    @ManyToMany(type => Class)
    @JoinTable()
    classes: Class;

    @CreateDateColumn({
        name: 'created_at'
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updated_at: Date;
}
