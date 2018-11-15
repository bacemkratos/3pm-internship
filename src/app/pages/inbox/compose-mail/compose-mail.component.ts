import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.css']
})
export class ComposeMailComponent implements OnInit {

  public editor;
  public editorContent;
  public editorConfig = {
    placeholder: 'Enter Mail Text'
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = this.editorContent;
      // this.editor.disable();
    }, 2800);
  }

  onEditorBlured(quill) {

  }

  onEditorFocused(quill) {

  }

  onEditorCreated(quill) {
    this.editor = quill;
  }

  onContentChanged({ quill, html, text }) {

  }

}
