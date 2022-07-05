import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MercadolibreService } from 'src/app/common/services/apis/mercadolibre.service';
import { Search } from 'src/app/common/models/search'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit, OnDestroy {
  public data!: Search;

  private _subscriptionQueryParams: Subscription | undefined;
  private _searchService: Subscription | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: MercadolibreService) { }

  ngOnDestroy(): void {
    this._subscriptionQueryParams?.unsubscribe();
    this._searchService?.unsubscribe();
  }


  ngOnInit(): void {
    this._subscriptionQueryParams = this.route.queryParams.subscribe(queryParams => {
      if (Object.keys(queryParams).length !== 0) {
        this._searchService = this.searchService.getItems(queryParams['search']).subscribe((data: Search) => {
          this.data = data;
        });
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
}
