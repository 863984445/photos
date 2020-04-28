var today =new Date();
var hournow = today.getHours();
var greeting;
if (hournow > 18){
	greeting = "Good evening!";
}else if (hournow >=12){
	greeting = "Good afternoon!";
}else if (hournow >0){
	greeting = "Good morning!";
}
var el = document.getElementById('header');
el.innerHTML = greeting;







