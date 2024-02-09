import { NgModule } from "@angular/core";
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



const  modules = [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule];

@NgModule({
    exports:[...modules],
    imports: [...modules]
})


export class MaterialModule{}