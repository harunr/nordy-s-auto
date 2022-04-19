

;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.



        $('div.phone-nav').click(function(){
            $('div.main-nav').slideToggle();
        })






	})// End ready function.



})(jQuery)
