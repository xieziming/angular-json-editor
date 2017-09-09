import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonEditorComponent } from './angular-json-editor.component';

export * from './angular-json-editor.component';
export * from './angular-json-editor.options';

@NgModule({
    imports: [CommonModule],
    declarations: [
        JsonEditorComponent
    ],
    exports: [JsonEditorComponent]
})
export class JSONEditorModule { }
