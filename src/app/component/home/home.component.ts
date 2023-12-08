import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { PersonneService } from 'src/app/service/personne.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personnes:Personne[]=[]
  nomEmploi!: string;
  dateDebut:Date = new Date();
  dateFin: Date = new Date();

  constructor(private personneService: PersonneService){}
  
  ngOnInit(): void {
    this.personneService.getAll().subscribe(data=> this.personnes = data)
  }

  rechercheParNom(){
    this.personneService.getPersonneByNomEmploi(this.nomEmploi).subscribe(data=>{
      this.personnes = data
    })
  }

  rechercherPardate(){
    this.personneService.getPersonnesDatebetween(this.dateDebut,this.dateFin).subscribe(data=> {
      this.personnes = data
    })
  }

}
