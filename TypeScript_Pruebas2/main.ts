//MODULOS

//import{ type RankingTuple, printRankings } from './myRankingModule';

//const rankings: RankingTuple[] = [
  //  [1, 'Alice', true],
    //[2, 'Bob', false],
    //[3, 'Charlie', true]
//];

//printRankings(rankings);


//En el package.json, activo la opcion de type:module.













//Clases 


class Actor{
    private _name: string;
    constructor(name: string){
        this._name = name;
    }

    set name(value: string){
        this._name = value;
    }


    get name(){
        return this._name;
    }
}


let actor = new Actor('Leonardo DiCaprio');
console.log(actor.name); // Output: Leonardo DiCaprio

actor.name = 'James Brown';
console.log(actor.name); // Output: James Brown



class Employee{
    public name: string;
    protected age: number;
    private mobile: string;

    constructor(name: string, age: number, mobile: string){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
    }

}