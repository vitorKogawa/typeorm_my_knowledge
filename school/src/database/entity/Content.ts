import {
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    OneToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import { Lesson } from "./Lesson";

@Entity('content')
export class Content {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({
        length: 250
    })
    description: string;

    @Column({
        length: 45
    })
    linkContent: string;

    @OneToOne(type => Lesson, content => Content)
    @JoinColumn()
    lesson: Lesson;

    @CreateDateColumn({
        name: 'created_at'
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updated_at: Date;
}
