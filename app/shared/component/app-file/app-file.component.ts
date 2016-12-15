import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-file',
  templateUrl: 'app-file.template.html'
})

export class AppFileComponent implements OnInit {

  @Input() formElement: FormControl;
  @Input() multiple: boolean = false;
  @Input() accept: string = 'images/*';

  @Output() loadingStart = new EventEmitter();
  @Output() loadingComplete = new EventEmitter();
  fileLoading: boolean = false;


  ngOnInit(): void {

  }

  onChange(event: any) {
    this.startLoading();
    let files: File[] = event.srcElement.files;
    for (let file of files) {
      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent: any) => {
        if (this.multiple) {
          this.appendFile(fileLoadedEvent.target.result);
        } else {
          this.setValue(fileLoadedEvent.target.result);
        }
        this.completeLoading();
      };
      fileReader.readAsDataURL(file);
    }

  }

  appendFile(file: string) {
    const files: string[] = this.formElement.value || [];
    files.push(file);
    this.formElement.setValue(files);
  }

  setValue(file: string) {
    this.formElement.setValue(file);
  }

  startLoading() {
    this.fileLoading = true;
    this.loadingStart.emit();
  }

  completeLoading() {
    this.fileLoading = false;
    this.loadingComplete.emit();
  }
}
