import {
    Column,
    CreateDateColumn, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";

export default abstract class Content {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @CreateDateColumn({
        name: 'created_at'
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updated_at: Date;
}
