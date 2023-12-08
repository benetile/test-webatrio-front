import { Emploi } from "./emploi";

export class Personne {
    id!: number;
    nom!: string;
    prenom!: string;
    dateDeNaissance!:Date;
    age!: number;

    emplois!:Emploi[];

    constructor(){}

}
