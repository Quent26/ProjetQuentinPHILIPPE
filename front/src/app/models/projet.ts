import { PoseurDeProjet } from "./poseur-de-projet";
import { Categorie } from "./categorie";

export class Projet {
    id:number;
    budget:Number;
    nom:String;
    description:string;
    poseurDeProjet:PoseurDeProjet;
    categorie:Categorie;
}
