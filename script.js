function Check()
{
    var score = 0;
    var Question_1=document.quiz.Question_1.value;
    var Question_2=document.quiz.Question_2.value;
    var Question_3=document.quiz.Question_3.value;
    var Question_4=document.quiz.Question_4.value;
    var Question_5=document.quiz.Question_5.value;
    
    if(Question_1=="B")
        {score++;}
    if(Question_2=="D")
        {score++;}
    if(Question_3=="A")
        {score++;}
    if(Question_4=="C")
        {score++}
    if(Question_5=="B")
        {score++}
    
    var percent= (score/5)*100;
  
 document.getElementById('result').innerHTML= alert("Your Score is : " + parseInt(percent)+"%");
}