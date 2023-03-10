import { UUID } from 'uuid-generator-ts';

export class Todo {
    public id: string;
    public title: string;
    public completed: boolean;

    constructor(text: string
    ) {

        const uuid = new UUID();
        this.title = text;
        this.id = uuid.toString();
        this.completed = false;
    }
}