$(document).ready(function () {
  const $formInput = $(".form-control , select");
  const $taxForm = $("#tax-form");
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

$taxForm.on("submit" , (e)=>{
  e.preventDefault();
})
   const taxCalculationFunction = (arr) =>{
    const intArray = arr.map(str => parseInt(str));
     let total  = intArray[0] +  intArray[1] - intArray[3]  

     const isTaxable =  total <= 800000
     if(!isTaxable){
      switch (intArray[2]) {
        case 1 : 
             total =  total -  0.3 * (total - 8) ;
             $('#result').html(total);
             $("#myModal").modal('show');
             break;
        case 2 :
             total =  total -  0.4 * (total - 8) ;
             $('#result').html(total);
             $("#myModal").modal('show');
             break;

        case 3:
              total  =  total - 0.1 * (total - 8) ;
              $('#result').html(total);
              $("#myModal").modal('show');
              break;
        default :
              total =  total -  0.3 * (total - 8) ;
              $('#result').html(total);
              $("#myModal").modal('show');
              break;
      }
     }
     else {
      $('#result').html(total);
      $("#myModal").modal('show');
     }
   }

 const isValid = (node) =>{
  const regx = /^\d+(\.\d{1,2})?$/.test(node.value);
  if (!regx) {
    $(node).addClass("border-danger");
    $(node).next().css({ display: "flex" });
    $(node).next().tooltip("show");
    return false;
  } else {
    $(node).removeClass("border-danger");
    $(node).next().css({ display: "none" });
    $(node).next().tooltip("hide");
    return true
  }
 }
 $formInput.on('blur' , function(){
  isValid(this);
 })
  $("#submit-btn").on("click", function(e) {
      if(isValid($formInput[0]) && isValid($formInput[1]) && isValid($formInput[2]) && isValid($formInput[3])){
        console.log("ok")
        taxCalculationFunction([$formInput[0].value,$formInput[1].value,$formInput[2].value,$formInput[3].value])
      }
  });


});
