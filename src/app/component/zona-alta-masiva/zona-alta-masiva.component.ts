import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CsvService } from 'src/app/services/csv.service';

@Component({
  selector: 'app-zona-alta-masiva',
  templateUrl: './zona-alta-masiva.component.html',
  styleUrls: ['./zona-alta-masiva.component.scss']
})
export class ZonaAltaMasivaComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  // form: any = {
  //   file: null,
  // };
  // fileToUpload: File | null = null;

  constructor(private csvService: CsvService) { }

  ngOnInit(): void {
    //this.fileInfos = this.csvService.getFiles();
  }

  // onSubmit(): void{
  //   let {file} = this.form;
  //   this.csvService.upload(file).subscribe( data =>{
  //     console.log(data);
  //   });
  // }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.csvService.uploadZonas(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              //this.fileInfos = this.csvService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }
}
