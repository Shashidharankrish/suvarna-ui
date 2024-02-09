import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";



const  modules = [ReactiveFormsModule];

@NgModule({
    exports:[...modules],
    imports: [...modules]
})


export class SharedModule{}