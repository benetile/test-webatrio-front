import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/app/model/emploi';
import { Personne } from 'src/app/model/personne';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit{

  personne:Personne = new Personne();
  emplois:Emploi[]=[];

  lecture!: boolean ;
  edition:boolean = true;


  constructor(private personneService: PersonneService){}

  ngOnInit(): void {
    this.emplois.push(new Emploi())
  }

  ajoutEmploi(){
    this.emplois.push(new Emploi())
  }

  creation(){
    this.personne.emplois = this.emplois;
    console.log(this.personne)
    this.personneService.addPersonne(this.personne).subscribe(data=>{
      this.personne = data;
      this.lecture = true;
      this.edition = false;
    })
  }
 
}
