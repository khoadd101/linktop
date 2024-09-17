//===========================================================================
//LINKTOP
//===========================================================================

function LinktopBoxlink(_element)
{
    document.addEventListener('DOMContentLoaded', function()
    {
        // Tìm phần tử với ID thay vì querySelector
        var element = document.getElementById(_element);
        if (element == null) {
            console.error("Element with ID " + _element + " not found");
            return;
        }

        getLinkTop();
        function getLinkTop()
        { 
            let url = 'https://textlink.linktop.vn/?adslk=';
            url += btoa(window.location.href) + '&dmn=' + btoa(window.location.hostname);
            
            const ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function()
            {
                if (this.readyState == 4 && this.status == 200)
                {
                    console.log("Response received:", this.responseText); // Ghi giá trị trả về vào console
                    if (this.responseText) {
                        // Nếu responseText có giá trị, chèn nội dung vào phần tử
                        element.innerHTML = this.responseText;
                    } else {
                        console.error("ResponseText is empty or invalid");
                    }
                }
            };
            ajax.open("GET", url);
            ajax.send();
        }
    });
}