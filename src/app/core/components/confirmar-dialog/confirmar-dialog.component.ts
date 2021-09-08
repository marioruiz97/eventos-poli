import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './confirmar-dialog.component.html',
})
export class ConfirmarDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
