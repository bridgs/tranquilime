$(document).ready(function() {
	
	//CREATE FAKE DATA
	/*var fakeData = [
		{ text: "My girlfriend broke up with me.", comfort: [ "I'm sorry :(" ] },
		{ text: "My car broke down.", comfort: [] },
		{ text: "I got fired from my job.", comfort: [ "Get a new job!", "Fire your boss!", "It was time for you to move on anyways." ] },
		{ text: "I don't have any friends.", comfort: [ "I'll be your friend :)" ] },
		{ text: "I don't know what to get for mother's day.", comfort: [ "Flowers!", "Chocolate!", "Buttercupts!", "Roses!", "Telescope!" ] },
		{ text: "I'm out of money.", comfort: [ "Get another job." ] },
		{ text: "I can't decide on a color scheme for my room.", comfort: [] },
		{ text: "My job is really really hard.", comfort: [ "Ask your boss for training." ] },
		{ text: "This codathon is too awesome.", comfort: [ "Tell me about it!" ] },
		{ text: "My friends are all hipsters.", comfort: [ ] },
		{ text: "America is headed in the wrong direction.", comfort: [] }
	];
	fakeData.forEach(function(stressor) {
		postStress(stressor.text, function(successful, id) {
			console.log(id);
			stressor.comfort.forEach(function(comfort) {
				postComfort(comfort, id, function() {});
			});
		});
	});*/
	
	
	//DELETE EXISTING DATA
	/*setTimeout(function() {
		getAllStress(function(stress) {
			stress.forEach(function(stressor) {
				$('<p>' + stressor.text + ' (' + stressor.id + ') <a class="delete-stressor" href="#' + stressor.id + '">delete</a></p>').appendTo('body').find('a');
				if(stressor.comfort.length > 0) {
					var ul = $('<ul></ul>').appendTo('body');
					stressor.comfort.forEach(function(comfort) {
						$('<li>' + comfort.text + ' (' + comfort.id + ') <a class="delete-comfort" href="#' + comfort.id + '">delete</a></li>').appendTo(ul);
					});
				}
			});
		});
		$('body').on('click', 'a', function() {
			var p = $(this).parent();
			var id = $(this).attr('href');
			id = id.substr(1, id.length - 1);
			if($(this).hasClass('delete-comfort')) {
				deleteComfort(id, function(successful) {
					p.remove();
				});
			}
			else {
				deleteStress(id, function(successful) {
					p.remove();
				});
			}
		});
	}, 2000);*/

	//MAKE PRETTY THINGS HAPPEN
	var postStress = $('.postStress');
	postStress.hide();
	var comfortCloud = new ComfortCloud();
	comfortCloud.appendTo($('body'));
	$('.cool-quote').on('click', function() {
		$('.cool-quote').fadeOut(4000);
		setTimeout(function() {
			comfortCloud.start();
		}, 1000);
		setTimeout(function() {
			postStress.fadeIn(3000)
		}, 7000);
		$('.add-stressor-button').on('click', function() {
			var text = $('.add-stressor-text').val();
			if(text !== '') {
				$('.add-stressor-text').val('');
				comfortCloud.createOwnBubble(text);
			}
		});
	});
});