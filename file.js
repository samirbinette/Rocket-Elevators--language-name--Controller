let Elevator={
   elevatorsList:['A','B'],
   amountOffFloor:[0,1,2,3,4,5,6,7,8,9,10],
   callButtonsList:[0,1,2,3,4,5,6,7,8,9,10],
   createCallButtonsDirection:['up','down','stop'],
   doors:['door open','close']
  
   };
  
   function findBestElevator(optionA,optionB,requested,requestedDirection,moveA,moveB) {
   //declare my variable
   
   requestedDirection;
   requested ;
   optionA ;
   optionB ;
    
    moveA;
    moveB;
    Doorselevator = Elevator.doors;

   //test
  
  
   


   //test
   //find the best elevator when the
   // option for elevator A
   if( requestedDirection == 'stop'  &&  requested == optionA) {
    console.log('1 condition');
    for(requested;requested<=floor;requested++){
      console.log(move[requested]);
      }//end of for loops for elevator A
     }//fin du if
     //option for elevator B
     else if(requestedDirection == 'stop'  && requested == optionB){
      console.log('2 condition');
      for(requested;requested<=floor;requested++){
        console.log(move[requested]);
        }//end of for loops for elevator B
       }//fin du if

       else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveB=='idle' && optionB < 5 && requested < 5  &&  optionB < requested ){
        console.log('ELEVATOR A probleme');
        for(optionB;optionB<=requested;optionB++){
         console.log(optionB);
         }//end of for loops for elevator B
       
          console.log(Doorselevator[0]);
       
         

         }//fin du if

       

        else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveA=='idle' && optionA < 5 && requested < 5  &&  optionA < requested ){
         console.log('ELEVATOR A probleme');
         (2,6,10,'up','idle','idle')
         for(optionA;optionA<=requested;optionA++){
          console.log(optionA);
          }//end of for loops for elevator B
        
           console.log(Doorselevator[0]);
        
          

          }//fin du if
          else if(requestedDirection == 'up' || requestedDirection == 'down'&&  moveB=='idle' && optionB < 5 && requested < 5  &&  optionB < requested ){
            console.log('ELEVATOR B IS COMMING');
            for(optionA;optionA<=requested;optionA++){
              console.log(optionA);
              }//end of for loops for elevator B

              console.log(Doorselevator[0]);
   
   
             }//fin du if
             else if(requestedDirection == 'up' || requestedDirection == 'down'&&  moveA=='idle'  && optionA < 5 && requested < 5  &&  optionA < requested ){
               console.log('ELEVATOR A IS COMMING');
              
               for(optionA;optionA<=requested;optionA++){
                console.log(optionA);
                }//end of for loops for elevator B
                 console.log(Doorselevator[0]);
      
      
                }//fin du if
             else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveB=='idle' && optionB < 5 && requested < 5  &&  optionB > requested ){
               console.log('ELEVATOR B IS COMMING');

               for(optionB;requested<=optionB;optionB--){
                console.log(optionB);
                }//end of for loops for elevator B

                  console.log(Doorselevator[0]);
      
      
                }//fin du if
                else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveA=='idle' && optionA < 5 && requested < 5  &&  optionA > requested ){
                  console.log('ELEVATOR A IS COMMING');
   
                  for(optionA;requested<=optionA;optionA--){
                    console.log(optionA);
                    }//end of for loops for elevator B
   
                     console.log(Doorselevator[0]);
         
         
                   }//fin du if

                else if(requestedDirection == 'up' || requestedDirection ==  'down' &&  moveB=='idle' && optionB > 5 && requested < 5  &&  optionB > requested ){
                  console.log('ELEVATOR B IS COMMING');

                  for(optionB;requested<=optionB;optionB--){
                    console.log(optionB);
                    }//end of for loops for elevator B
   
                     console.log(Doorselevator[0]);

                    
         
          
   
                   }//fin du if
                   else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveA=='idle'&& optionA > 5 && requested < 5  &&  optionA > requested ){
                     console.log('ELEVATOR A IS COMMING');
   
                     for(optionB;requested<=optionA;optionA--){
                        console.log(optionA);
                        }//end of for loops for elevator B
      
                        console.log(Doorselevator[0]);
   
                       
            
             
      
                      }//fin du if

                      else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveA=='idle' && optionA > 5 && requested > 5  &&  optionA > requested ){
                        console.log('ELEVATOR A IS COMMING');
      
                        for(optionA;requested<=optionA;optionA--){
                          console.log(optionA);
                          }//end of for loops for elevator B
         
                           console.log(Doorselevator[0]);
      
                          
               
                
         
                         }//fin du if

                         else if(requestedDirection == 'up' || requestedDirection == 'down' &&  moveB=='moving' && optionB > 5 && requested > 5  &&  optionB > requested ){
                          console.log('ELEVATOR A IS COMMING');
        
                              
                          for(optionA;requested<=optionA;optionA--){
                            console.log(optionA);
                            }//end of for loops for elevator B
                             console.log(Doorselevator[0]);
        
                            
                 
                  
           
                           }//fin du if


                      

                    
                            

                   else {
                      console.log('fail');
                   }


                   return optionA,optionB,requested,requestedDirection,moveA,moveB;




   }//fin de la fonction

   function InsideElevator(floor,choice){
   
      let buttomList=Elevator.amountOffFloor;
       floor;
      console.log('what floor do you wanna go in\n');
      console.log( buttomList);
      choice;

      if(choice>10){
      console.log('invalid answer');
      return InsideElevator;

      } else if(choice<0){
         console.log('invalid answer');
         return InsideElevator;
   
         }
         else{

       
   console.log('you choose:'+buttomList[choice]); 
  
   if(floor<choice){
   for(choice;floor<=choice;floor++){
      console.log(floor);

    }
   }
    else if(floor>choice){
      for(choice;floor>=choice;floor--){
         console.log(floor);
   
       }
      }

      return floor, choice;

   }
   }


  
     function Scenario1(){
      console.log('SCENARIO 1');
      console.log('___________________________________________________________________________________________');
     let level = 3;
     
     findBestElevator(2,6,level,'up','idle','idle');//(optionA,optionB,requested,requestedDirection)
      console.log('door close');
    
     InsideElevator(level,7);//(floor,choice)

     console.log('door open');

     console.log('___________________________________________________________________________________________');
     
     

     }

     function Scenario2(){
      console.log('SCENARIO 2');
      console.log('___________________________________________________________________________________________');
     let level = 1;
     
     findBestElevator(10,3,1,'up','idle','idle');//(optionA,optionB,requested,requestedDirection)

    InsideElevator(1,6);//(floor,choice)
    console.log('door open');
    console.log('door close');

    console.log('\n 2 minutes later');

    findBestElevator(10,6,3,'up','idle','idle');//(optionA,optionB,requested,requestedDirection)
    InsideElevator(3,5);//(floor,choice)
    console.log('door open\n');
    console.log('third person');
    
    findBestElevator(10,5,9,'down','idle','idle');
    InsideElevator(9,2);
    
  

   

     console.log('___________________________________________________________________________________________');
     
     


     }
    function Scenario3()
    {
      console.log('___________________________________________________________________________________________');
       findBestElevator(10,0,3,'down','idle','moving')//(optionA,optionB,requested,requestedDirection,moveA,moveB) 

       
       InsideElevator(3,2);

       console.log('open\n');
       console.log('5 minutes later');

     
        findBestElevator(2,6,10,'up','idle','idle')//(optionA,optionB,requested,requestedDirection,moveA,moveB) 
        InsideElevator(10,3);

       console.log('___________________________________________________________________________________________');
     }
  

     Scenario1();
     Scenario2();
     Scenario3();
     

   
   

  

  


 


