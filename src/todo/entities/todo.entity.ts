import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  title: string;

  @Column('text')
  description: string;

  @Column()
  isCompleted: boolean;
}
