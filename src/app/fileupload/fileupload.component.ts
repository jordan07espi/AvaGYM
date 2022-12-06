import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  selectedFile: any=null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    this.selectedFile=<File>event.target.files[0];
  }

}
