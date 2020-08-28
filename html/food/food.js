
    
    function DisplayPrice(price){
        var val1 = 0;
        for( i = 0; i < document.form1.feeling.length; i++ ){
            if( document.form1.feeling[i].checked == true ){
                val1 = document.form1.feeling[i].value;
            }
        }

        var val2 = 0;
        for( i = 0; i < document.form2.flavor.length; i++ ){
            if( document.form2.flavor[i].checked == true ){
                val2 = document.form2.flavor[i].value;
            }
        }

        var sum=parseInt(val1) + parseInt(val2);
        document.getElementById('totalSum').value=sum;
    }




/*function radio_chk() {

    function DisplayPrice(price){
        
        var feeling = document.getElementsByName('feeling');
        var flavor = document.getElementsByName('flavor')

        var val1= 0;
        for(i=0; i< feeling.length; i++){
            if(feeling[i].checked){
                val1 = feeling[i].value;
            }
        }

        var val2 = 0;
        for(i=0; i< flavor.length; i++){
            if(flavor[i].checked){
                val2 = flavor[i].value;
            }
        }

        var sum = parseInt(val1) + parseInt(val2);
        alert(sum);

    }


}


    /*var ele = document.getElementsByTagName('input'); 
      
    for(i = 0; i < ele.length; i++) { 
          
        if(ele[i].type="radio") { 
          
            if(ele[i].checked) 
              alert (ele[i].value)  

          }
            
      } */

