import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'AboutUs',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  paragraph = '';

  content = {
    mision: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ratione quo quia expedita numquam. Quo beatae at minus delectus sequi! Libero, qui officia quasi maiores impedit eum excepturi consequatur necessitatibus inventore ad, voluptatem cumque dolorem. Tempore ipsa voluptatum, sed blanditiis autem doloribus debitis atque magnam cum eius quas quam numquam, non distinctio suscipit maxime dignissimos placeat excepturi enim amet. Illo sunt consectetur nemo cupiditate saepe laudantium sit, quisquam ex accusamus sed at quia quasi maiores quas qui aliquid vitae dolores provident dolore consequatur possimus quam. Quibusdam aut voluptatem sit expedita, eos nulla? Tenetur ad corporis veritatis saepe beatae laborum rem?",
    vision: "Las plazas siguen llenas de gente. Intolerable, claro. Pero las palomas mensajeras vuelan libres de balcón a balcón. ”Quienes llenan el espacio público son distintos entre si, tienen consignas diversas, piensan distinto unos de otros”, cuentan con horror los pregoneros. Ministros, emperadores y aspirantes al trono intercambian culpas, sin saber a quien pertenece toda esa gente, y en el fondo todos desean salir también a la calle, haciendo ver que ellos también son diferentes de los demás, de los suyos, e incluso de si mismos si es necesario. Pero no se atreven. Las plazas siguen llenas de gente. Intolerable, claro.",
    visionTwo: "Es el día más inexistente, demasiado lejos del domingo como para propiciar melancolías, y demasiado lejos del sábado para acarrear esperanzas. Por eso muchas veces los miércoles desaparecen, dejan de existir, y la gente sin saberlo se ha comido un día, y tienen la sensación de que la semana ha sido corta. Los jefes de estado procuran no llamarse, pues saben que en otro país podría ser ya jueves, y se podría liar. Hay pueblos remotos a los que no puede llegarse en miércoles, pues no están, desaparecen ese día, y hasta las carreteras que llevan hasta ellos resultan inútiles."
  }
  misionController = true;
  visionController = false;
  visionTwoController = false;

  constructor() { }

  ngOnInit(): void {
    this.paragraph = this.content.mision;
  }

  OnPressedLabel(label: any){
    switch(label){
      case 0:
        if(!this.misionController){
          this.misionController = true;
          this.visionController = false;
          this.visionTwoController = false;
          this.paragraph = this.content.mision;
        }
        break;
        case 1:
          if(!this.visionController){
            this.misionController = false;
            this.visionController = true;
            this.visionTwoController = false;
            this.paragraph = this.content.vision;
          }
          break;
        case 2:
          if(!this.visionTwoController){
            this.misionController = false;
            this.visionController = false;
            this.visionTwoController = true;
            this.paragraph = this.content.visionTwo;
          }
          break;
    }
  }

}
