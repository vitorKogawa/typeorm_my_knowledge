import {
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn
} from "typeorm";

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
