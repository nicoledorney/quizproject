import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizRef = new FormGroup({
    q1:new FormControl,
    q2:new FormControl,
    q3:new FormControl,
    q4:new FormControl,
    q5:new FormControl,
    q6:new FormControl,
    q7:new FormControl,
    q8:new FormControl,
  })

  messageForm: FormGroup;

  q1Choices: string [];
  q2Choices: string[];
  q3Choices: string [];
  q4Choices: string[];
  q5Choices: string [];
  q6Choices: string[];
  q7Choices: string [];
  q8Choices: string[];


  q1Selected: string;
  q2Selected: string;
  q3Selected: string;
  q4Selected: string;
  q5Selected: string;
  q6Selected: string;
  q7Selected: string;
  q8Selected: string;

  count: number = 0;
  totalQuestions: number = 8;
  average: number = 0;

  submitted: boolean= false;
  

  constructor(private router: Router){
    this.router.navigate(['home'])
  }

  

  ngOnInit(){
    this.q1Choices = ['None of the time', 'A little bit of the time', '50% of the time', 'Up to 100%']
    this.q2Choices = ['Yes', 'No']
    this.q3Choices = ['Alone', 'On a team']
    this.q4Choices = ['Yes','No']
    this.q5Choices = ['Under 40','Around 40', 'Over 40']
    this.q6Choices = ['None', '1-2', '3-5', 'More than 5']
    this.q7Choices = ['Personal Transportation', 'Public Transportation', 'A little of both']
    this.q8Choices = ['1', '2', '3', '4', '5']
    counter: 0;

  
  }
  

  checkAnswers(){
    console.log(this.quizRef.value);
    //this.submitted=true;
    this.q1Selected=this.quizRef.controls.q1.value;
    this.q2Selected=this.quizRef.controls.q2.value;
    this.q3Selected=this.quizRef.controls.q3.value;
    this.q4Selected=this.quizRef.controls.q4.value;
    this.q5Selected=this.quizRef.controls.q5.value;
    this.q6Selected=this.quizRef.controls.q6.value;
    this.q7Selected=this.quizRef.controls.q7.value;
    this.q8Selected=this.quizRef.controls.q8.value;
    console.log(this.q1Selected)


    if(this.q1Selected == "50% of the time" || this.q1Selected == "Up to 100%"){
      this.count += 1;
      console.log(this.count);
    }

    if(this.q2Selected == "Yes"){
      this.count +=1;
      console.log(this.count)
    }
    if(this.q3Selected== "On a team"){
      this.count += 1;
      console.log(this.count)
    }
    if(this.q4Selected == "Yes"){
    this.count += 1;
    console.log(this.count)
    }
    if(this.q5Selected == "Around 40" || this.q5Selected =="Over 40"){
      this.count += 1;
      console.log(this.count);
    }

    if(this.q6Selected == "3-5" || this.q6Selected=="More than 5"){
      console.log("red")
      this.count +=1;
      console.log(this.count)
    }
    if(this.q7Selected== "Nails"){
      console.log("correclty picked nails")
      this.count += 1;
      console.log(this.count)
    }
    if(this.q8Selected == "3" || this.q8Selected =="4" || this.q8Selected =="5"){
    this.count += 1;
    console.log(this.count)
    }
  
    this.average= this.count/this.totalQuestions;
    console.log(this.average);

    if(this.count >= 4){
      alert("Congratulations! We think you would be a wonderful fit for our company and would like to move forward with the interview process.")
    } else {
      alert("We are sorry but we do not think that you are the right fit for us at this time.")
    }
  }
  goHome(){
    this.router.navigate(['/home']);
  }

}

