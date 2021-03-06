import { Component } from "@angular/core";
import { Observable } from "rxjs";
import * as moment from "moment";

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve("Promise Resolved");
    }, 4000);
  });

  date: Observable<Date> = new Observable(obs => {
    setInterval(() => {});
  });
}
