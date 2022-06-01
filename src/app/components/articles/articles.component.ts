import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Articles } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Output() articlesListNew = new EventEmitter<Articles>();
  public articlesList: any;

  public isViewMore: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getConversion().subscribe((data) => {
      this.articlesList = data;
      this.articlesListNew.emit();
      console.log(data);

    })
  }



  public viewMore(): void {
    this.isViewMore = !this.isViewMore;
  }

}
