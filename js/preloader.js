document.body.onload = function() {

	setTimeout(function() {	
		var preloader = document.getElementById('page-preloader');
		if ( !preloader.classList.contains('done') )
		{
			preloader.classList.add('done')
		}
	}, 1000);
}

// https://www.youtube.com/watch?v=PS9hc-MtBdQ&t=459s
// Стилизация скролла