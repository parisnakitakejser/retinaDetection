/*!
 * Support by jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Copyright 2013 Paris Nakita Kejser
 * http://parisnakitakejser.com
 *
 * Date: 2013-10-23
 */
$.retinaDetection = 
{
	_getFilename: function(object,seperator)
	{
		var pos= object.indexOf(seperator);
		var result=object.substring(0,pos);
		
		return result;
	},
	
	detect: function()
	{
		var retina = window.devicePixelRatio > 1;
		 
		
		if (retina) 
		{
			var imageRes = '@4';
		}
		else 
		{
			var imageRes = '@2';
		}
		
		$('img[data-res="1"]').each(function () 
		{
			var file_ext=/[^.]+$/.exec( $(this).attr('src') );
			
			$(this).attr('src', $.retinaDetection._getFilename( $(this).attr('src'), '.'+ file_ext) + imageRes +'.'+ file_ext );
			
			// $(this).attr('src', $(this).attr('src') );
		});
	}
};
