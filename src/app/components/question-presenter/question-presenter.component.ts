import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Question } from "src/app/model/Question";

@Component({
  selector: "app-question-presenter",
  templateUrl: "./question-presenter.component.html",
  styleUrls: ["./question-presenter.component.css"]
})
export class QuestionPresenterComponent implements OnInit {
  @Input()
  question: Question;

  @Output()
  answerChosen = new EventEmitter<string>();

  onSelectAnswer(answer: string) {
    this.answerChosen.emit(answer);
  }

  constructor() {}

  ngOnInit() {}
}
