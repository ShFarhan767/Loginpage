function togglePassword(element) {
    $(element).toggleClass("fa-eye fa-eye-slash");
  
    $(element).siblings("input").each(function() {
      if ($(element).hasClass('fa-eye-slash')) {
        $(this).attr('type', 'text');
        $(this).focus();
      } else if ($(element).hasClass('fa-eye')) {
        $(this).attr('type', 'password');
      }
    });
  }
  
  function toggleWhenExiting(element) {
    console.log("focus toggle");
  
    $(element).siblings("span").each(function() {
      if ($(this).hasClass('fa-eye-slash')) {
        $(element).attr('type', 'password');
        $(this).toggleClass("fa-eye fa-eye-slash");
      }
    });
  }