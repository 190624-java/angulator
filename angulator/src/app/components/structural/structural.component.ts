import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  title: string = 'Structural Directive';
 documentation: string = 'https://angular.io/guide/structural=directives';
 
 public flashcards = [
   {
     question: 'What is Java?',
     answer: 'The best server-side language ever!'
   },
   {
     question: 'What is Angular?',
     answer: 'The best front-end application framework ever!'
   },
   {
     question: 'What is TypeScript?',
     answer: 'TypeScript is a super-set of JavaScript that makes an attempt to be more strongly typed.'
   },
   {
     question: 'What is a Flashcard?',
     answer: 'You are a flashcard.'
   }
  ];
 

}
