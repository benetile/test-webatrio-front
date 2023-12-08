import { Personne } from "./personne";

export class Emploi {
    id!:number;
    nom!:string;
    poste!: string;
    debut!:Date;
    fin!:Date;

    personne!:Personne;

    constructor(){}
}
