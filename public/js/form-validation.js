// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())


      function calculate() {
        var time = document.forms("time").value;
        var club = document.forms("club").value;
        var totalPrice = document.forms("totalPrice").value;
        if (timeValidation(time)) {
          if (clubValidation(club)) {
          }
        }

        return false;
      }
      function timeValidation(time) {
        if (time < 2 || time == "") {
          alert("Enter time for club");
          time.focus();
          return false;
        }
        return time;
      }

      function clubValidation(club) {
        if (club == "") {
          alert("Enter club");
          club.focus();
          return false;
        } else if (club == "night") {
          totalPrice = 12000 * (timeValidation(time) / 2);
          return totalPrice;
        } else {
          totalPrice = 8500 * (timeValidation(time) / 2);
          return totalPrice;
        }
      } 