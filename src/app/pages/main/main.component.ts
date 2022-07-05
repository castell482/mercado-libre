import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MercadolibreService } from 'src/app/common/services/apis/mercadolibre.service';
import { Search } from 'src/app/common/models/search'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {
  public data!: Search;

  private _searchService: Subscription | undefined;

  constructor(private searchService: MercadolibreService) { }

  ngOnDestroy(): void {
    this._searchService?.unsubscribe();
  }


  ngOnInit(): void {
    this._searchService = this.searchService.getAllItems().subscribe((data: Search) => {
      console.log(data)
      this.data = data;
    });
  }
}
