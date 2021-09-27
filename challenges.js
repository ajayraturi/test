/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/
init();
var rollTotal,dice1,dice2,activePlayer,scores;
 document.querySelector('.btn-roll').addEventListener('click',roll);
 document.querySelector('.btn-new').addEventListener('click',init);
 document.querySelector('.btn-hold').addEventListener('click',hold);
 
 
 function init()
 {
	 rollTotal=0;
	 activePlayer=0;
	  scores = [0, 0];
	console.log('init')
	document.querySelector('#score-1').textContent='0'; 
	document.querySelector('#score-0').textContent='0'; 
	document.querySelector('#current-1').textContent='0'; 
	document.querySelector('#current-0').textContent='0'; 
	document.querySelector('#dice-1').style.display='none';
	document.querySelector('#dice-2').style.display='none';
	    document.querySelector('.player-0-panel').classList.add('active');
		    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 }
 
 function roll(){
	 dice1= Math.floor(Math.random()*6)+1;
	  dice2= Math.floor(Math.random()*6)+1;
	  console.log('data',dice1, dice2);
	   document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
	  if(dice1!==1 && dice2!==1){
		  rollTotal+=dice1+dice2;
			console.log('rollotal',rollTotal); 
			document.querySelector('#current-'+activePlayer).textContent=rollTotal;
	  }
	  else{
		 
			next();
	  }
	 
 }

 
 function hold(){
	
	
	 
	 scores[activePlayer] +=rollTotal;
	   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	   document.querySelector('#current-'+activePlayer).textContent='0';
	   rollTotal=0;
	   if(scores[activePlayer]>=100){
		   alert('name-'+activePlayer+'won');
	   }
	 console.log(rollTotal, scores[activePlayer]);
	 
 }
 
 function next(){
	 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	   rollTotal = 0;
	  	document.querySelector('#current-0').textContent='0';
		document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active')
			
	document.querySelector('#current-1').textContent='0'; 
	document.querySelector('#current-0').textContent='0'; 
	 
 }
