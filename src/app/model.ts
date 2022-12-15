

export class TodoItem {

    description;
    action;

    constructor (description:string,action:boolean) 
    {
        this.description =  description;
        this.action = action;
        
    }


}

export class Model {
    user;
    items;

    constructor(){
        this.user = "Mert"
        
        this.items = [
            new TodoItem('Sport',true),
            new TodoItem('Kitap',false),
            new TodoItem('Teknoloji',false),
            new TodoItem('Gazete',false)

        ];
    }
}

