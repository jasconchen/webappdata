/* 基本图文组件对象 */

var H5ComponentBase = function(name, cfg){
	var cfg = cfg || {};
	var id = ('h5_c_'+Math.random()).replace('.', '_');

	// 把当前的组建类型添加到样式中进行标记
	var cls = 'h5_component_' + cfg.type;
	var component = $('<div class="h5_component '+cls+' h5_component_name_'+ name+'" id="'+id+'"></div>');

	cfg.text   && component.text(cfg.text);
	cfg.width  && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage', 'url('+cfg.bg+')');

	if(cfg.center === true){
		component.css({
			marginLeft: (cfg.width/4 * -1)+'px',
			left:'50%'
		})
	}
	// 任务二：(1)支持 relativeTo参数（CSS translate 实现方法）
	if (cfg.relativeTo) {
		var parent = $('body').find('.h5_component_name_'+cfg.relativeTo);
    	// 任务二：(2)获取 relateveTo 元素的位置，应该用 offsetLeft、offsetTop
        var position = {
            left:$(parent)[0].offsetLeft,
            top:$(parent)[0].offsetTop,
        };
    	// 任务二：(3)考虑 cfg.center 对relativeTo参数的影响，并且在有、没有这两种情况下都要支持
		if (cfg.center === true) {
			position.left=0;
		}
		component.css('transform','translate('+position.left+'px,'+position.top+'px)');
	}
    
    

	component.on('onLoad', function(){
		component.addClass(cls+ '_load').removeClass(cls+ '_leave');
		cfg.animateIn && component.animate(cfg.animateIn);
		return false;
	})
	component.on('onLeave', function(){
		component.addClass(cls+ '_leave').removeClass(cls+ '_load');
		cfg.animateOut && component.animate(cfg.animateOut);
		return false;
	})

	return component;
}
