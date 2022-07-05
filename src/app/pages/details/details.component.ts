import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MercadolibreService } from 'src/app/common/services/apis/mercadolibre.service';
import { Description } from 'src/app/common/models/description';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public data!: Description;

  private _subscriptionQueryParams: Subscription | undefined;
  private _searchService: Subscription | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: MercadolibreService) { }

  ngOnDestroy(): void {
    this._subscriptionQueryParams?.unsubscribe();
    this._searchService?.unsubscribe();
  }


  ngOnInit(): void {
    this._subscriptionQueryParams = this.route.params.subscribe(params => {
      if (Object.keys(params).length !== 0) {
        this._searchService = this.searchService.getItem(params['id']).subscribe((data: Description) => {
          this.data = data;
        });
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
}
