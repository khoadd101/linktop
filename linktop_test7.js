function LinktopBoxlink(_element)
{
  const element = document.body.querySelector(_element);
  
  document.addEventListener('DOMContentLoaded', () => {
    var url = 'https://textlink.linktop.vn/?adslk=';
    //url += btoa(window.location.href) + '&dmn=' + btoa(window.location.hostname);
	url += btoa('http://antt.vn/')+'&dmn='+btoa('antt.vn');
	console.log('Url: ', url);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200)
	  {
        try
		{
          element.insertAdjacentHTML("beforebegin", this.responseText);
        } catch (error) {
          console.error("Error inserting content:", error);
        }
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}