//===========================================================================
//LINKTOP
//===========================================================================

function LinktopBoxlink(_element)
{
	var element = document.body.querySelector(_element);
	if(element == null) return;
	
	document.addEventListener('DOMContentLoaded', function()
	{
		getLinkTop();
		function getLinkTop()
		{ 
			var url = 'https://textlink.linktop.vn/?adslk=';
			//url += btoa(window.location.href)+'&dmn='+btoa(window.location.hostname);
			url += btoa('http://antt.vn/')+'&dmn='+btoa('antt.vn');
			const ajax = new XMLHttpRequest();
			ajax.onreadystatechange = function()
			{
				if(this.readyState == 4 && this.status == 200)
				{
					element.innerHTML = this.responseText;
				}
			};
			ajax.open("GET", url);
			ajax.send();
		}
	}, true);
}