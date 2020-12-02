import {
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import Class from "./Class";
import Content from "./Content";

@Entity('lesson')
export default class Lesson {
    @PrimaryGeneratedColumn()
    idAula: number;

    @Column()
    description: string;

    @ManyToOne(() => Class, classe => classe.lessons)
    classe: Class;

    @CreateDateColumn({
        name: 'created_at'
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updated_at: Date;
}
