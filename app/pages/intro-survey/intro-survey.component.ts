import { Component,EventEmitter, OnInit } from '@angular/core';
import * as Survey from "survey-angular";
import "survey-angular/survey.css";
import {Output} from '@angular/core';
import {Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {any} from 'codelyzer/util/function';
Survey.StylesManager.applyTheme("default");

@Component({
  selector: 'app-intro-survey',
  templateUrl: './intro-survey.component.html',
  styles: [
  ]
})
export class IntroSurveyComponent implements OnInit {
  public connectedUser:number;
  userLoggedIn:boolean=false;


  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  result: any;
  constructor(private route: ActivatedRoute,
              private router:Router,
              private userService:UserService
  ) {
    this.route.queryParams.subscribe(params => {
      this.connectedUser = params['id'];
      if (Number(this.connectedUser) > 0)
        this.userLoggedIn = true;
    });
  }

  ngOnInit(): void {

    let g;
    const json = {
      title: 'HTML Basics',
      showProgressBar: 'bottom',
      showTimerPanel: 'top',
      maxTimeToFinishPage: 15,
      maxTimeToFinish: 45,
      firstPageIsStarted: true,
      startSurveyText: 'Start Quiz',
      pages: [
        {
          questions: [{
            type: 'html', html: '<br/>Timpul efectiv pentru a raspunde la o intrebare este de 30 secunde, testul contine 3 intrebari.' +
              '<br/>Apasa pe  <b>\'Start Quiz\'</b> cand esti pregatit sa incepi.'
          }]
        },
        {
          questions: [
            {
              type: 'checkbox',
              name: 'q1',
              isRequired: true,
              hasNone: true,
              choicesOrder: 'random',
              title: 'Care dintre urmatoarele taguri nu necesita sa fie inchise?',
              choices: ['meta', 'img', 'hr', 'br', 'input', 'p', 'head', 'title'],
              correctAnswer: ['meta', 'img', 'hr', 'br', 'input']
            }
          ]
        },
        {
          questions: [
            {
              type: 'radiogroup',
              name: 'q2',
              title: 'De la ce vine HTML?',
              choicesOrder: 'random',
              choices: ['Horrible Themes, Mandatory Logic', 'Hyper Text Markup Language', 'Hyper Tension Making Language', 'High Level Machine Learning'],
              correctAnswer: 'Hyper Text Markup Language'
            }
          ]
        },
        {
          //maxTimeToFinish: 15,
          questions: [
            {
              type: 'radiogroup',
              name: 'q3',
              title: 'Un fisier in format html trebuie sa contina obligatoriu:',
              choicesOrder: 'random',
              choices: ['Title si body', 'Body si Head', 'Body si paragrafe', 'Paragrafe si imagini'],
              correctAnswer: 'Body si head'
            }
          ]
        }
      ],
      completedHtml: '<h4>Ati raspuns corect la  <b>{correctedAnswers}</b> intrebari din <b>{questionCount}</b>.</h4>',


    };
    const survey = new Survey.Model(json);
    Survey.SurveyNG.render("surveyElement", { model: survey });


    /*survey
      .onComplete
      .add(function (sender) {
        document
          .querySelector('#surveyResult')
          .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
      });

    survey.data = {
      q1: ["meta","img","hr","br","input"],
      q2: "Hyper Text Markup Language",
      q3: "Body si head"
    };

    survey.mode = "display";
    survey.questionsOnPageMode = "singlePage";
    survey.showNavigationButtons = "none";
    survey.showProgressBar = "off";
    survey.showTimerPanel = "none";
    survey.maxTimeToFinishPage = 0;
    survey.maxTimeToFinish = 0;
    survey
      .onAfterRenderQuestion
      .add(function (survey, options) {
        var span = document.createElement("span");
        var isCorrect = options
          .question
          .isAnswerCorrect();
        span.innerHTML = isCorrect
          ? "Correct"
          : "Incorrect";
        span.style.color = isCorrect
          ? "green"
          : "red";
        var header = options
          .htmlElement
          .querySelector("h5");
        if (!isCorrect) {
          header.style.backgroundColor = "salmon";
          var radio = options
            .htmlElement
            .querySelector('input[value="' + options.question.correctAnswer + '"]');
          if (!!radio) {
            radio.parentElement.style.color = "green";
          }
        }
        header.appendChild(span);
      });*/



  }

}
