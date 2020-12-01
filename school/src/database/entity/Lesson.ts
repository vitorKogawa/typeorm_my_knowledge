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
import { Content } from "./Content";

@Entity('lesson')
export class Lesson {
    @PrimaryGeneratedColumn()
    idAula: number;

    @Column()
    description: string;

    @OneToOne(type => Content, lesson => Lesson)
    content: Content;

    @ManyToOne(type => Class, lessons => Lesson)
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
