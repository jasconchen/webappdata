/* 饼图组件对象 */
var H5ComponentPie = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	// 绘制网格线 - 背景层
	var w = cfg.width;
	var h = cfg.height;

	// 加入画布 - 背景层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	
	var draw = function(per) {
		
	}

	component.on('onLoad', function() {
		// 雷达图生长动画
		var s = 0;
		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				s += .01;
				draw(s);
			}, i * 10 + 500)
		}
	});
	component.on('onLeave', function() {
		// 雷达图退场动画
		var s = 1;
		for (var i = 0; i < 100; i++) {
			setTimeout(function() {
				s -= .01;
				draw(s);
			}, i * 10)
		}
	});

	return component;
}