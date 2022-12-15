<<<<<<< HEAD


export class TodoItem {

    description;
    action;

    constructor (description:string,action:boolean) 
    {
        this.description =  description;
        this.action = action;
        
    }


}

=======
>>>>>>> 4-Creating_model
export class Model {
    user;
    items;

    constructor(){
<<<<<<< HEAD
        this.user = "Mert"
        
        this.items = [
            new TodoItem('Sport',true),
            new TodoItem('Kitap',false),
            new TodoItem('Teknoloji',false),
            new TodoItem('Gazete',false)
=======
        this.user = "Mert";
        this.items = [
            new TodoItem('Spor',true),
            new TodoItem('Müzik',false),
            new TodoItem('Ders',true),
            new TodoItem('Yazılım',true),
>>>>>>> 4-Creating_model

        ];
    }
}

<<<<<<< HEAD
=======

export class TodoItem {
    
    description;
    action;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}
>>>>>>> 4-Creating_model
