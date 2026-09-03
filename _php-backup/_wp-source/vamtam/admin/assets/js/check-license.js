/*
 VamTam Check License
 */

/*global jQuery*/

(function( $ ) {
	'use strict';

	$('body').on('click', '#vamtam-check-license', function(e) {
		e.preventDefault();

		var self = $(this);

		if ( self.hasClass('disabled' ) ) return false;

		var result = $('#vamtam-check-license-result').html('').css( 'display', 'block' );
		var $validMsg = $('#vamtam-license-result-wrap > .valid');
		var $invalidMsg = $('#vamtam-license-result-wrap > .invalid');
		var isUnregister = self.hasClass('unregister');
		var $licenseInput = $('#vamtam-envato-license-key');
		var keyValue = $licenseInput.val();
		var ownStoreKeyPattern = /^VAMTAM-[A-Z0-9]{5}(?:-[A-Z0-9]{5}){5}$/i;
		var envatoMarketPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
		var valAttempt = 0;

		var getSelectedKeySource = function() {
			if ( $('#vamtam-envato-elements-radio').is(':checked') ) {
				return 'elements';
			}

			if ( $('#vamtam-own-store-radio').is(':checked') ) {
				return 'vamtam';
			}

			return 'market';
		};

		var detectKeySource = function( key ) {
			var normalized = ( key || '' ).trim();

			if ( ownStoreKeyPattern.test( normalized ) ) {
				return 'vamtam';
			}

			if ( envatoMarketPattern.test( normalized ) ) {
				return 'market';
			}

			if ( /^eyJ[A-Za-z0-9\-_\.]+$/.test( normalized ) || ( normalized.length >= 36 && normalized.indexOf( ' ' ) === -1 ) ) {
				return 'elements';
			}

			return null;
		};

		var getAttemptOrder = function( selectedSource, key ) {
			var detectedSource = detectKeySource( key );
			var attemptOrder = [];

			if ( selectedSource ) {
				attemptOrder.push( selectedSource );
			}

			if ( detectedSource && attemptOrder.indexOf( detectedSource ) === -1 ) {
				attemptOrder.push( detectedSource );
			}

			[ 'market', 'elements', 'vamtam' ].forEach( function( source ) {
				if ( attemptOrder.indexOf( source ) === -1 ) {
					attemptOrder.push( source );
				}
			} );

			return attemptOrder;
		};

		var keySource = getSelectedKeySource();
		var attemptOrder = getAttemptOrder( keySource, keyValue );

		var sourceToIsToken = function( source ) {
			return source === 'elements';
		};

		if ( isUnregister ) {
			var isElementsToken = window.VAMTAM_ADMIN.isElementsToken;
			var ownStoreKey = ownStoreKeyPattern.test( keyValue );
			var unregisterText = isElementsToken ?
				( keyValue ? window.VAMTAM_ADMIN.unRegTokenTxt : window.VAMTAM_ADMIN.unRegInvalidTokenTxt ) :
				( ownStoreKey ? window.VAMTAM_ADMIN.unRegOwnStoreTxt : window.VAMTAM_ADMIN.unRegPcTxt );

			if ( confirm( unregisterText ) ) {
				$licenseInput.attr('value', '');
			} else {
				return;
			}
		}
		$licenseInput.prop('disabled', true);

		$validMsg.hide();
		$invalidMsg.hide();

		self.css('display', 'inline-block').addClass('disabled');

		var spinner = $('#vamtam-check-license ~ span.spinner');
		if ( spinner.length > 0 ) {
			spinner.show();
		} else {
			if ( isUnregister ) {
				$('#vamtam-check-license').after('<span class="spinner is-active" style="display:inline-block;" />');
				spinner = $('#vamtam-check-license ~ span.spinner');
			} else {
				$licenseInput.after('<span class="spinner is-active" style="display:inline-block;" />');
				spinner = $('#vamtam-envato-license-key ~ span.spinner');
			}
		}

		const postData = {
			action: 'vamtam-check-license',
			'license-key': keyValue,
			nonce: self.attr('data-nonce'),
			unregister: isUnregister ? true : false,
			key_source: attemptOrder[ valAttempt ],
			is_token: sourceToIsToken( attemptOrder[ valAttempt ] ),
		};

		const do_post = ( postData ) => {
			$.ajax({
				type: 'POST',
				url: ajaxurl,
				data: postData,
				success: function(data) {
					if ( data.includes( 'Valid Purchase Key' ) ) {
						window.location = window.location.href;
					} else if ( data.includes( 'Incorrect Purchase Key' ) ) {
						if ( isUnregister ) {
							window.location = window.location.href;
						} else {
							if ( valAttempt < attemptOrder.length - 1 ) {
								valAttempt++;
								postData.key_source = attemptOrder[ valAttempt ];
								postData.is_token = sourceToIsToken( postData.key_source );
								do_post( postData );
							} else {
								$invalidMsg.css('display', 'flex');
								self.removeClass('disabled');
								$licenseInput.prop('disabled', false);
								spinner.hide();
							}
						}
					} else if ( data.includes( 'Unregistered Key' ) ) {
						window.location = window.location.href;
					} else {
						result.append( $('<p />').addClass('vamtam-check-license-response').append(data) );
						spinner.hide();
						self.removeClass('disabled');
						$licenseInput.prop('disabled', false);
					}
				}
			});
		};
		do_post( postData );
	});
})( jQuery );
