(function($){
    $.widget("custom.responsiveSlider", {
        widgetEventPrefix:"hzp",
        options:{
            sliderWidth: 1000,
            sliderHeight: 600,
            auto: true,
            _sliderDelay: 3000,
            easing: "linear",          
        },
        _create: function(){
            var _slider = this;
            this.element.css("padding", "0");
            _slider.contenedor = this.element;

            _slider._build();

            _slider._buildButtonBar();
        },
        //Funcion que se usa para almacenar el tamaño de las diapositivas,
        //Recuperando el tamaño de la primera
        _setSize: function(){
            this.options.sliderWidth = $(this.slides.get(0)).outerWidth(false);
            this.options.sliderHeight = $(this.slides.get(0)).outerHeight(false);
        },

        //Funcion que organiza mejor la estructura de diapositivas
        _build: function(){
            var _slider = this;
            _slider.indice = 0;
            _slider.marginLeft = 0;

            _slider.slides = _slider.contenedor.find("li");
            
            _slider._setSize();

            _slider.contenedor.addClass("responsiveSlider_Ul")
            .width(_slider.slides.length * _slider.options.sliderWidth)
            .height(_slider.options.sliderHeight);

            _slider.slides.addClass("responsiveSlider_Li")
            .width(_slider.options.sliderWidth)
            .height(_slider.options.sliderHeight);

            _slider.sliderContainer = $("<div class='responsiveSlider_sliderContainer'></div>");
            _slider.contenedor.before(_slider.sliderContainer);
            _slider.sliderContainer.append(_slider.contenedor)
            .width(_slider.options.sliderWidth)
            .height(_slider.options.sliderHeight);

            _slider.setTimer();
        },
        //Funcion que crea la botonera
        _buildButtonBar: function(){
            var _slider = this;    
        },

        setTimer: function(){
            var _slider = this;
            if(_slider.options.auto){
                _slider.timerInterval = setInterval(function(){
                    _slider.indice ++;
                    _slider.marginLeft -= _slider.options.sliderWidth;
                    _slider.contenedor.stop().animate(
                        {marginLeft: _slider.marginLeft + "px"},
                        {
                            duration: 1000,
                            specialEasing: {marginLeft: _slider.options.easing},
                        }
                    );
                }, _slider.options._sliderDelay);
            }
        },
    });
} (jQuery));