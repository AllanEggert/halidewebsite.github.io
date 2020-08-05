$('#contactForm').submit(function(e) {
    e.preventDefault();
    $('#form-loading').html('<div class="spinner-border" role="status"><span class="sr-only">Submitting</span></div>');
    $.ajax({
      url: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLSec6V0dOeuzu58oOrvbzhGz10QA9W34r5XlZvmH2tOfeg4VoQ/formResponse',
      data: $('#contactForm').serialize(),
      type: 'POST',
      dataType: "json",
      statusCode: {
        0: function(data) {
          $('#form-loading').html('');
          $('#noticeArea').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Success, thank you!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        },
        200: function(data) {
            $('#form-loading').html('');
            $('#noticeArea').html('<div class="alert alert-success alert-dismissible fade show" role="alert">Success, thank you!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        },
        403: function(data) {
            $('#form-loading').html('');
            $('#noticeArea').html('<div class="alert alert-danger alert-dismissible fade show" role="alert">Oops, something went wrong. Please try again.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        }
      }  
    });
  });
  $('#goto-tab3').click(function(){
    $('a[href="#tab4"]').tab('show');
  });