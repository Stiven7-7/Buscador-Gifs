import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get tags(){
    return this.gifsService.tagsHistory;
  }

  constructor(private gifsService: GifsService){

  }

  searchItemList(tag: string){
    this.gifsService.searchTag(tag);
  }

}
