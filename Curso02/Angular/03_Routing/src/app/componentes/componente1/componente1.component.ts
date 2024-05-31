
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-componente1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './componente1.component.html',
})
export class Componente1Component implements OnInit {

  public valor1:string = "HOLA"
  public valor2:string = "HOLO, que es más gordo"

  constructor(private router:Router) {
    console.log("Creando Componente1")
  }

  ngOnInit(): void {
  }

  public navegacionProgramatica():void{

    //Esto es análogo a cuando en la vista utilizamos '[routerLink]'
    this.router.navigate(["/componente2", this.valor1, this.valor2])
    //this.router.navigate(["/componente2"])
    
    //Esto es análogo a cuando en la vista utilizamos 'routerLink'
    //this.router.navigateByUrl("/componente2")
    //this.router.navigateByUrl("/componente2/333/444")
    //this.router.navigateByUrl("/componente2/"+this.valor1+"/"+this.valor2)
    //this.router.navigateByUrl(`/componente2/${this.valor1}/${this.valor2}`)

  }

}
