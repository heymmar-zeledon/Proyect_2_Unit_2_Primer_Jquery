(function($){
    $.widget("custom.responsiveSlider", {
        widgetEventPrefix:"hzp",
        options:{

        },
        _create: function(){
            var _slider = this;

            _slider.contenedor = this.element;

            _slider._build();

            _slider._buildButtonBar();
        },
        //Funcion que organiza mejor la estructura de diapositivas
        _build: function(){
            var _slider = this;
            _slider.slides = _slider.contenedor.find("li");
            
            _slider.contenedor.addClass("responsiveSlider_Ul")
            .width(_slider.slides.length * _slider.slides.outerWidth(false));

            _slider.slides.addClass("responsiveSlider_Li");

            _slider.sliderContainer = $("<div class='responsiveSlider_sliderContainer'></div>");
            _slider.contenedor.before(_slider.sliderContainer);
            _slider.sliderContainer.append(_slider.contenedor);
        },
        //Funcion que crea la botonera
        _buildButtonBar: function(){
            var _slider = this;    
        },

    });
} (jQuery));