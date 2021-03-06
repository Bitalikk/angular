import { LocalCounterService } from "./../services/local-counter.service";
import { AppCounterService } from "./../services/app-counter.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
  providers: [LocalCounterService]
})
export class CounterComponent {
  constructor(
    private appCounterService: AppCounterService,
    private localCounterService: LocalCounterService
  ) {}
}
