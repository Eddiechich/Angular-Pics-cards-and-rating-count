export class Card {

    name: string;
    url: string;  
    date: Date;
    likes: number;

    constructor(name: string,url:string) { 
        this.name = name;
        this.url = url;
        this.date = new Date();
        this.likes = 0;
    }

    setLikes(likes:number) {    
        if(likes>10){
            this.likes = 10;
        }
        else{
            this.likes = likes;
        }
    }
}