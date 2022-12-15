export class Model {
    user;
    items;

    constructor(){
        this.user = "Mert";
        this.items = [
            new TodoItem('Spor',true),
            new TodoItem('Mğzik',false),
            new TodoItem('Ders',true),
            new TodoItem('Yazılım',true),

        ];
    }
}


export class TodoItem {
    
    description;
    action;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}