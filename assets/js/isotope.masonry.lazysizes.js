$('.isotope-wrapper')
		.each(function(){

				var $isotope = $('.isotope-box', this);
				var $filterCheckboxes = $('input[type="radio"]', this);

				var filter = function(){
					var type = $filterCheckboxes.filter(':checked').data('type') || '*';
					if(type !== '*'){
						type = '[data-type="'+ type +'"]';
					}
					$isotope.isotope({ filter: type });
				};

				$isotope.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					sortBy : 'random',
				});
				
					$('.nav-groups label').click(function () {
						$(this).addClass('is-checked').siblings('.is-checked').removeClass('is-checked');
						});
  
        $isotope[0].addEventListener('load', (function(){
            var runs;
            var update = function(){
              $isotope.isotope('layout');
              runs = false;
            };
            return function(){
              if(!runs){
                runs = true;
                setTimeout(update, 33);
              }
            };
         }()), true);

				$(this).on('change', filter);
				filter();
		})
	;