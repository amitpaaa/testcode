import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-health-check-details',
  templateUrl: './health-check-details.component.html',
  styleUrls: ['./health-check-details.component.scss']
})
export class HealthCheckDetailsComponent implements OnInit {
  details: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<HealthCheckDetailsComponent>
  ) {
    this.details = data;
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
