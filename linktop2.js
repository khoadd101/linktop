function LinktopBoxlink(_element)
{
  const element = document.querySelector(_element);
  if (!element) {
    console.error("Element with selector", _element, "not found.");
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://textlink.linktop.vn/?adslk=';
    url += btoa(window.location.href) + '&dmn=' + btoa(window.location.hostname);

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