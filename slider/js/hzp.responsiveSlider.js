(function($){
    $.widget("custom.responsiveSlider", {
        widgetEventPrefix:"hzp",
        options:{

        },
        _create: function(){
            var _slider = this;
            _slider._build();

            _slider._buildButtonBar();
        },
        //Funcion que organiza mejor la estructura de diapositivas
        _build: function(){
            
        },
        //Funcion que crea la botonera
        _buildButtonBar: function(){

        },

    });
} (jQuery));