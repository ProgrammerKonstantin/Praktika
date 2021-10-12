const zone0 = document.querySelector('.zone-0');
const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone3 = document.querySelector('.zone-3');
const zone4 = document.querySelector('.zone-4');
const zone5 = document.querySelector('.zone-5');
const zone6 = document.querySelector('.zone-6');
const zone7 = document.querySelector('.zone-7');
const zone8 = document.querySelector('.zone-8');
const zone9 = document.querySelector('.zone-9');
const zone10 = document.querySelector('.zone-10');
const zone11 = document.querySelector('.zone-11');
const zone12 = document.querySelector('.zone-12');
const zone13 = document.querySelector('.zone-13');
const zone14 = document.querySelector('.zone-14');
const zone15 = document.querySelector('.zone-15');
const zone16 = document.querySelector('.zone-16');
const zone17 = document.querySelector('.zone-17');
const zone18 = document.querySelector('.zone-18');
const zone19 = document.querySelector('.zone-19');
const zone20 = document.querySelector('.zone-20');
const zone21 = document.querySelector('.zone-21');
const zone22 = document.querySelector('.zone-22');
const zone23 = document.querySelector('.zone-23');
const zone24 = document.querySelector('.zone-24');
const zone25 = document.querySelector('.zone-25');
const zone26 = document.querySelector('.zone-26');
const zone27 = document.querySelector('.zone-27');
const zone28 = document.querySelector('.zone-28');
const zone29 = document.querySelector('.zone-29');
const zone30 = document.querySelector('.zone-30');
const zone31 = document.querySelector('.zone-31');
const zone31 = document.querySelector('.zone-32');
const zone33 = document.querySelector('.zone-33');
const zone34 = document.querySelector('.zone-34');
const zone35 = document.querySelector('.zone-35');
const zone36 = document.querySelector('.zone-36');
const zone37 = document.querySelector('.zone-37');
const zone38 = document.querySelector('.zone-38');
const zone39 = document.querySelector('.zone-39');
const zone40 = document.querySelector('.zone-40');
const tablem = document.querySelector('#tablem');








zone0.ondragover = allowDrop;



zone1.ondragover = allowDrop;

function allowDrop (event){

	event.preventDefault();
}

zone2.ondragover = allowDrop;



zone3.ondragover = allowDrop;



zone4.ondragover = allowDrop;


zone5.ondragover = allowDrop;



zone6.ondragover = allowDrop;



zone7.ondragover = allowDrop;



zone8.ondragover = allowDrop;



zone9.ondragover = allowDrop;



zone10.ondragover = allowDrop;



zone11.ondragover = allowDrop;



zone12.ondragover = allowDrop;



zone13.ondragover = allowDrop;



zone14.ondragover = allowDrop;



zone15.ondragover = allowDrop;



zone16.ondragover = allowDrop;



zone17.ondragover = allowDrop;



zone18.ondragover = allowDrop;



zone19.ondragover = allowDrop;



zone20.ondragover = allowDrop;



zone21.ondragover = allowDrop;



zone22.ondragover = allowDrop;



zone23.ondragover = allowDrop;



zone24.ondragover = allowDrop;



zone25.ondragover = allowDrop;



zone26.ondragover = allowDrop;



zone27.ondragover = allowDrop;



zone28.ondragover = allowDrop;



zone29.ondragover = allowDrop;



zone30.ondragover = allowDrop;



zone31.ondragover = allowDrop;



zone32.ondragover = allowDrop;



zone33.ondragover = allowDrop;



zone34.ondragover = allowDrop;



zone35.ondragover = allowDrop;



zone36.ondragover = allowDrop;



zone37.ondragover = allowDrop;



zone38.ondragover = allowDrop;



zone39.ondragover = allowDrop;



zone40.ondragover = allowDrop;












tablem.ondragstart = drag;

function drag(event){
	event.dataTransfer.setData('id', event.target.id);
}

















zone0.ondrop = drop;

function drop (event){
	let itemId = event.dataTransfer.getData('id');

	event.target.append(document.getElementById(itemId));
}

zone1.ondrop = drop;




zone2.ondrop = drop;




zone3.ondrop = drop;




zone4.ondrop = drop;




zone5.ondrop = drop;




zone6.ondrop = drop;



zone7.ondrop = drop;



zone8.ondrop = drop;



zone9.ondrop = drop;



zone10.ondrop = drop;



zone11.ondrop = drop;



zone12.ondrop = drop;



zone13.ondrop = drop;



zone14.ondrop = drop;


zone15.ondrop = drop;



zone16.ondrop = drop;



zone17.ondrop = drop;



zone18.ondrop = drop;



zone19.ondrop = drop;



zone20.ondrop = drop;



zone21.ondrop = drop;



zone22.ondrop = drop;



zone23.ondrop = drop;



zone24.ondrop = drop;



zone25.ondrop = drop;



zone26.ondrop = drop;



zone27.ondrop = drop;



zone28.ondrop = drop;



zone29.ondrop = drop;



zone30.ondrop = drop;



zone31.ondrop = drop;



zone32.ondrop = drop;



zone33.ondrop = drop;



zone34.ondrop = drop;



zone35.ondrop = drop;



zone36.ondrop = drop;



zone37.ondrop = drop;



zone38.ondrop = drop;



zone39.ondrop = drop;



zone40.ondrop = drop;



