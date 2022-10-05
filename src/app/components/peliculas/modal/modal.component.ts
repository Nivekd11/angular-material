import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild('blueContent',{static:true})
  blueContent?: ElementRef;
  @ViewChild('redContent',{static:true})
  redContent?: ElementRef;
  
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private renderer:Renderer2
  ) {}
  
  ngOnInit() {
    console.log("peli-"+this.data.id)
    let fav = localStorage.getItem("fav-"+this.data.id)
    let list = localStorage.getItem("list-"+this.data.id)
    if(!fav){
      localStorage.setItem("fav-"+this.data.id,"0")
    }else{
      console.log(this.redContent)
      switch(fav){
        case '1': this.renderer.addClass(this.redContent?.nativeElement,"red-button"); break
        default:  this.renderer.removeClass(this.redContent?.nativeElement,"red-button"); break
      }
    }
    if(!list){
      localStorage.setItem("list-"+this.data.id,"0")
    }else{
      console.log(this.blueContent)
      switch(list){
        case '1': this.renderer.addClass(this.blueContent?.nativeElement,"blue-button"); break
        default:  this.renderer.removeClass(this.blueContent?.nativeElement,"blue-button"); break
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveFav(id: string){
    let fav = localStorage.getItem("fav-"+id)
    if(fav === '0'){
      localStorage.setItem("fav-"+id,'1')
    }else{
      localStorage.setItem("fav-"+id,'0')
    }
  }
  saveList(id: string){
    let list = localStorage.getItem("list-"+id)
    if(list === '0'){
      localStorage.setItem("list-"+id,'1')
    }else{
      localStorage.setItem("list-"+id,'0')
    }
  }

}
