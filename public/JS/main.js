$(function(){

$.ajax({
	type: 'GET',
	url: 'https://icanhazdadjoke.com/',
	dataType: 'json',
}).done(function(joke1){
	$('#joke').text(joke1.joke)
})
let lastJoke= ""
let jokes = []
let jokesLocation = 0
$('#next').click(function(){
	jokesLocation = 0
	console.log('clicked')
	//gets new joke and sets joke as new joke
	$.ajax({
		type: 'GET',
		url: 'https://icanhazdadjoke.com/',
		dataType: 'json',
	}).done(function(Joke){
		// console.log(Joke)
		lastJoke = $('#joke').text()
		jokes.unshift($('#joke').text())
		$('#joke').text(Joke.joke) 
		// console.log(lastJoke)
		console.log(jokes)
	})
	$('#last').show()
	$(this).attr('class', 'col-md-offset-2 col-md-5 btn btn-primary' )

})
$('#last').click(function(){
	if(jokesLocation===0){

		$('#joke').text(jokes[0])
		jokesLocation += 1
	}else{
	jokesLocation += 1
	console.log(jokesLocation)
	console.log('clicked')
	console.log(jokes[jokesLocation])
	$('#joke').text(jokes[jokesLocation])
	}
})








	
})
 