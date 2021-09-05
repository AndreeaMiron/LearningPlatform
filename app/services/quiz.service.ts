import { Injectable } from '@angular/core';

interface Quiz{
  question: string;
  answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Care dintre urmatoarele taguri nu necesita sa fie inchise?',
      answer: [
        { option: 'meta', correct: true },
        { option: 'head', correct: false },
        { option: 'title', correct: false },
        { option: 'p', correct: false },
      ]
    },
    {
      question: 'De la ce vine HTML?',
      answer: [
        { option: 'Horrible Themes, Mandatory Logic', correct: false },
        { option: 'Hyper Tension Making Language', correct: false },
        { option: 'Hyper Text Markup Language', correct: true },
        { option: 'High Level Machine Learning', correct: false },
      ]
    },
    {
      question: 'Un fisier in format html trebuie sa contina obligatoriu:',
      answer: [
        { option: 'Body si head', correct: true },
        { option: 'Title si body', correct: false },
        { option: 'Body si paragrafe', correct: false },
        { option: 'Paragrafe si imagini', correct: false }
      ]
    },
    {
      question: 'Care dintre urmatoarele heading-uri are cel mai mic scris?',
      answer: [
        { option: '\<\h1\>', correct: false },
        { option: '\<\h6\>', correct: true },
        { option: '\<\heading\>', correct: false },
        { option: '\<\head\>', correct: false }
      ]
    },
    {
      question: 'Care este structura corecta pentru a introduce o pauza intre randuri?',
      answer: [
        { option: '\<lb\>', correct: false },
        { option: '\<br\>', correct: true },
        { option: '\<break\>', correct: false },

      ]
    },
    {
      question: 'Care este sintaxa corecta pentru a schimba imaginea de fundal in albastru?',
      answer: [
        { option: '\<background\> yellow\<\\background\>', correct: false },
        { option: '\<body bg=\"yellow\"\>', correct: false },
        { option: '\<body style=\"background-color:yellow;\"\>', correct: true },

      ]
    },
    {
      question: 'Care este varianta corecta pentru a crea o legatura spre o alta pagina web?',
      answer: [
        { option: '\<a name=\"http://www.google.ro\"\> Google \<\/a\>', correct: false },
        { option: '\<a href=\"http://www.google.ro\"\>  Google \<\/a\>', correct: true },
        { option: '\<a\> http://www.google.ro \<\/a\>', correct: false},
        { option: '\<a url=\"http://www.google.ro\"\>  Google \<\/a\>', correct: false }
      ]
    },
    {
      question: 'Cum deschizi un link intr-o pagina/fereastra noua?',
      answer: [
        { option: '\<a href=\"url\" target=\"new\"\> ', correct: false },
        { option: '\<a href=\"url\" target=\"\_blank\"\> ', correct: true },
        { option: '\<a href=\"url\" new\> ', correct: false },

      ]
    },
    {
      question: 'Care dintre urmatoarele reprezinta elemente ale unui tabel?',
      answer: [
        { option: '\<thead\> \<body\> \<tr\>', correct: false },
        { option: '\<table\> \<head\> \<tfoot\> ', correct: false },
        { option: '\<table\> \<tr\> \<tt\>', correct: false},
        { option: '\<table\> \<tr\> \<td\> ', correct: true }
      ]
    },
    {
      question: 'Elementele de tip inline se afiseaza normal fara sa inceapa o linie noua',
      answer: [
        { option: 'Adevarat', correct: true },
        { option: 'Fals', correct: false }
      ]
    },
    {
      question: 'Cum initializezi o lista numerotata?',
      answer: [
        { option: '\<list>', correct: false },
        { option: '\<ol\>', correct: true },
        { option: '\<dl\>', correct: false },
        { option: '\<li\>', correct: false },
        { option: '\<ul\>', correct: false },
      ]
    },
    {
      question: 'Care este varianta corecta pentru a crea un checkbox?',
      answer: [
        { option: '\<checkbox>', correct: false },
        { option: '\<check\>', correct: false },
        { option: '\<input type=\"check\"\>', correct: false },
        { option: '\<input type=\"checkbox\"\>', correct: true},

      ]
    },
    {
      question: 'Care este varianta corecta pentru a crea un camp in care sa inseram text?',
      answer: [
        { option: '\<textfield>', correct: false },
        { option: '\<textinput type=\"text\"\>', correct: false},
        { option: '\<input type=\"text\"\>', correct: true },
        { option: '\<input type=\"textfield\"\>', correct: false },

      ]
    }
    ,
    {
      question: 'Care este varianta corecta pentru a insera o imagine?',
      answer: [
        { option: '\<img alt=\"MyImage\"\> image.gif \<\/img\>', correct: false },
        { option: '\<img src=\"image.gif\" alt=\"MyImage\"\>', correct: true },
        { option: '\<image src=\"image.gif\" alt=\"MyImage\"\>', correct: false },
        { option: '\<img href=\"image.gif\" alt=\"MyImage\"\>', correct: false },

      ]
    }
    ,
    {
      question: 'Un iframe este folosit pentru a afisa o pagina web in alta pagina web',
      answer: [
        { option: 'Nu exista asa ceva', correct: false },
        { option: 'Adevarat', correct: true },
        { option: 'Fals', correct: false },


      ]
    },
    {
      question: 'Comentariile incep cu \<\!-- si se termina cu -->',
      answer: [
        { option: 'Fals', correct: false },
        { option: 'Adevarat', correct: true },

      ]
    },
    {
      question: 'Ce atribut se foloseste pentru a afisa un text daca nu se poate afisa imaginea?',
      answer: [
        { option: 'src', correct: false },
        { option: 'alt', correct: true },
        { option: 'longdesc', correct: false },
        { option: 'title', correct: false }

      ]
    },
    {
      question: 'Ce tag se foloseste pentru a afisa fisiere video?',
      answer: [
        { option: 'media', correct: false },
        { option: 'video', correct: true },
        { option: 'movie', correct: false },


      ]
    },
    {
      question: 'In HTML, \<canvas\> se foloseste pentru a:',
      answer: [
        { option: 'manipula date in MySQL', correct: false },
        { option: 'afisa randuri din baza de date', correct: false },
        { option: 'crea elemente miscatoare', correct: false },
        { option: 'desena grafic', correct: true }

      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }

  constructor() { }
}
