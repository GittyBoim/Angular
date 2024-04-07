import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPictureSize]'
})
export class PictureSizeDirective {

  constructor(private el:ElementRef) {   }

  @HostListener('mouseenter') onMouseEnter(){
    this.pictureSize('1.5');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.pictureSize('');
  }

  private pictureSize(size:string){
    this.el.nativeElement.style.scale = size;
  }

}
