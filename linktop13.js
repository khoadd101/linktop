//===========================================================================
//LINKTOP
//===========================================================================

function LinktopBoxlink(_element)
{
    document.addEventListener('DOMContentLoaded', function()
    {
        // Tìm phần tử bằng ID
        var element = document.getElementById(_element);
        if (element == null) {
            console.error("Element with ID " + _element + " not found");
            return;
        }

        getLinkTop();
        function getLinkTop()
        { 
            // Tạo URL để gửi yêu cầu
            let url = 'https://textlink.linktop.vn/?adslk=aHR0cDovL2FudHQudm4v&dmn=YW50dC52bg==';
            
            // Kiểm tra URL được tạo
            console.log("Generated URL:", url);

            const ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function()
            {
                if (this.readyState == 4) { // Kiểm tra khi request hoàn tất
                    console.log("AJAX request completed.");
                    
                    // Kiểm tra mã trạng thái phản hồi
                    if (this.status == 200) {
                        console.log("Full response received:", this.responseText); // Ghi ra responseText
                        if (this.responseText) {
                            // Chèn HTML vào phần tử nếu responseText có giá trị
                            element.innerHTML = this.responseText;
                        } else {
                            console.error("ResponseText is empty or invalid");
                        }
                    } else {
                        console.error("Error: Request failed with status", this.status);
                    }
                }
            };

            // Gửi yêu cầu
            ajax.open("GET", url, true);
            ajax.send();
        }
    });
}