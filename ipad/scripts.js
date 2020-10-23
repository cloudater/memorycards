const deck = document.getElementById('deck');
let cardCount = 4;
initDeck();

function initDeck() {
	deck.innerHTML = "";
	const cards_easy = 
	['e_(1)','e_(2)','e_(3)','e_(4)','e_(5)','e_(6)','e_(7)','e_(8)','e_(9)',
	'e_(10)','e_(11)','e_(12)','e_(13)','e_(14)','e_(15)','e_(16)','e_(17)','e_(18)','e_(19)',
	'e_(20)','e_(21)','e_(22)','e_(23)','e_(24)','e_(25)','e_(26)','e_(27)','e_(28)','e_(29)',
	'e_(30)','e_(31)','e_(32)','e_(33)','e_(34)','e_(35)','e_(36)','e_(37)','e_(38)','e_(39)',
	'e_(40)','e_(41)','e_(42)','e_(43)','e_(44)','e_(45)','e_(46)','e_(47)','e_(48)','e_(49)',
	'e_(50)','e_(51)','e_(52)'];
	const cards_hard = 
	['h_(1)','h_(2)','h_(3)','h_(4)','h_(5)','h_(6)','h_(7)','h_(8)','h_(9)',
	'h_(10)','h_(11)','h_(12)','h_(13)','h_(14)','h_(15)','h_(16)','h_(17)','h_(18)','h_(19)',
	'h_(20)','h_(21)','h_(22)','h_(23)','h_(24)','h_(25)','h_(26)','h_(27)','h_(28)','h_(29)',
	'h_(30)']
	const cards_comb =
	['e_(1)','e_(2)','e_(3)','e_(4)','e_(5)','e_(6)','e_(7)','e_(8)','e_(9)',
	'e_(10)','e_(11)','e_(12)','e_(13)','e_(14)','e_(15)','e_(16)','e_(17)','e_(18)','e_(19)',
	'e_(20)','e_(21)','e_(22)','e_(23)','e_(24)','e_(25)','e_(26)','e_(27)','e_(28)','e_(29)',
	'e_(30)','e_(31)','e_(32)','e_(33)','e_(34)','e_(35)','e_(36)','e_(37)','e_(38)','e_(39)',
	'e_(40)','e_(41)','e_(42)','e_(43)','e_(44)','e_(45)','e_(46)','e_(47)','e_(48)','e_(49)',
	'e_(50)','e_(51)','e_(52)',
	'h_(1)','h_(2)','h_(3)','h_(4)','h_(5)','h_(6)','h_(7)','h_(8)','h_(9)',
	'h_(10)','h_(11)','h_(12)','h_(13)','h_(14)','h_(15)','h_(16)','h_(17)','h_(18)','h_(19)',
	'h_(20)','h_(21)','h_(22)','h_(23)','h_(24)','h_(25)','h_(26)','h_(27)','h_(28)','h_(29)',
	'h_(30)'];
	//if (Name == "Easy") {
	cards = cards_comb;
	//}
	
	const playCards = getRandomArrayElements(cards, cardCount);
	function getRandomArrayElements(arr, count) {
		if (count >= arr.length) {
			count = arr.length;
		}
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	}
	
	var rowCount = getRowCount();
	
	var i=0;
	var row;
	playCards.forEach(item => {
		if (i == 0) {
			row = document.createElement("div");
			row.classList.add('memory-game');
		}
		var memory_card=document.createElement("div");
		memory_card.classList.add('memory-card');
		
		var back = document.createElement("img");
		back.classList.add('back-face');
		back.setAttribute('src', '../cards/back.gif');
		memory_card.appendChild(back);
		
		var front = document.createElement("img");
		front.classList.add('front-face');
		front.setAttribute('src', '../cards/'+item+'.gif');
		memory_card.appendChild(front);
		row.appendChild(memory_card);
		if (++i == rowCount) {
			deck.appendChild(row);
			i = 0;
			row = null;
		}
	})
	if (row != null) {
		deck.appendChild(row);
	}

	const cardItems = document.querySelectorAll('.memory-card');
	cardItems.forEach(card => card.addEventListener('click', flipCard));
	// flipAll();
}

function getRowCount() {
	if (cardCount == 4) {
		return 4;
	} else if (cardCount == 16 ) {
	    return 8;
	} else if (cardCount / 4 <= 4 ) {
		return 4;
	} else if (cardCount / 4 < 8 ) {
		return cardCount / 4;
	} else {
		return 8;
	}
}

function flipCard() {
  this.classList.toggle('flip');
}

function flipAll() {
	const cardItems = document.querySelectorAll('.memory-card');
	cardItems.forEach(card => {
		if (!card.classList.contains('flip')) {
			if(card.click) {
				card.click();
			}else{
				try{
					var evt = document.createEvent('Event');
					evt.initEvent('click',true,true);
					card.dispatchEvent(evt);
				}catch(e){alert(e)};       
			}		
		}
	});
}

function triggerClick(card) {
	if(card.click) {
		card.click();
	}else{
		try{
			var evt = document.createEvent('Event');
			evt.initEvent('click',true,true);
			card.dispatchEvent(evt);
		}catch(e){alert(e)};       
	}	
}

function next() {
	cardCount += 4;
	if (cardCount<=40){
	initDeck();
	}else{
		cardCount = 40;
		initDeck();
	}
}



function next_4() {
		cardCount = 4;
		initDeck();
}

function next_8() {
		cardCount = 8;
		initDeck();
}

function next_16() {
		cardCount = 16;
		initDeck();
}

function next_24() {
		cardCount = 24;
		initDeck();
}

function next_32() {
		cardCount = 32;
		initDeck();
}

function next_40() {
		cardCount = 40;
		initDeck();
}