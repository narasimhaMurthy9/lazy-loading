import { Component,OnInit } from '@angular/core';
import { DeactivatedGuard } from 'src/app/services/gaurds/deactive-gaurd.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements DeactivatedGuard {


canExit(){
      if(confirm("are you sure")){
        return true
      }else{
        return false
      }
}
}
