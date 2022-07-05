import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  public search?: string;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public searchItems() {
    if (this.search) {
      this.router.navigate(["/items"], {
        queryParams: {
          search: this.search?.toLowerCase()
        },
      }).then(
        (nav) => {
          console.log(nav);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
