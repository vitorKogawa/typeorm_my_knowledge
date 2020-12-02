import {
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import Discipline from "./Discipline";

@Entity('lesson')
export default class Lesson {
    @PrimaryGeneratedColumn()
    idAula: number;

    @Column()
    description: string;

    @ManyToOne(() => Discipline, discipline => discipline.lessons)
    discipline: Discipline;

    @CreateDateColumn({
        name: 'created_at'
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updated_at: Date;
}
