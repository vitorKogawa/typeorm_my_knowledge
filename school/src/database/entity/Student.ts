import {
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinTable, 
    ManyToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";
import { 
    IsEmail,
    MaxLength, 
    MinLength
} from 'class-validator'

import Class from "./Class";

@Entity('student')
export default class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 45
    })
    @MaxLength(50, {
        message: 'Um nome deve ter no máximo 50 caracteres.'
    })//utilizando class validator para definir que este campo pode receber no máximo 50 caracteres
    @MinLength(2, {
        message: 'Um nome deve ter no mínimo 2 caracteres.'
    })//utilizando o class validator para definir que este campo pode receber no mínimo 2 caracteres
    name: string;

    @Column({
        length: 45
    })
    key: string;

    @Column()
    @IsEmail()//utilizando class validator para definir que este é um campo do tipo email, e só pode aceitar valores no formato de email
    email: string;

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
