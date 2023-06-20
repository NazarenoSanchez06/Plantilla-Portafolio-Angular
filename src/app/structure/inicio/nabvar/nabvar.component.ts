import { Component } from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent {
  public visible:boolean=false;



  showDialog(){
this.visible=true;
  }

}
