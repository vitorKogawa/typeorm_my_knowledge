import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";
import Lesson from "./Lesson";

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

    @OneToMany(() => Lesson, lesson => lesson.classe )
    lessons: Lesson[];

    @CreateDateColumn({
        name: 'created_at'
    })
    created_At: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updated_At: Date;
}
