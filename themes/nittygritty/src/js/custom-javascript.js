(function ($, Drupal) {
	Drupal.behaviors.myModuleBehavior = {
		attach: function (context, settings) {
			$('body', context).once('click').each(function () {
				alert('javascript is amazing!!1!');
			});
		}
	};
})(jQuery, Drupal);
