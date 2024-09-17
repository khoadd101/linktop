<script async defer>
  var linklop_script = document.createElement('script');
  linklop_script.src = 'https://cdn.jsdelivr.net/gh/linktop/nl@master/linktop.js';
  linklop_script.onload = function() {
    try {
      LinktopBoxlink('boxLinkTop');
    } catch (error) {
      console.error('Lỗi khi gọi hàm LinktopBoxlink:', error);
    }
  };
  document.head.appendChild(linklop_script);
</script>