/* 散点图表组件对象 */
var H5ComponentPoint = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	var base = cfg.data[0][1]; // 以第一个数据的比例为大小的100%

	// 输出每个Point
	$.each(cfg.data, function(idx, item) {

		var point = $('<div class="point point_' + idx + '"></div>');

		var name = $('<div class="name">'+item[0]+'</div>');
		var rate = $('<div class="per">'+(item[1]*100)+'%</div>');

		name.append(rate)
		point.append(name);

		var per = (item[1] / base * 100) + '%';
		point.width(per).height(per);

		if (item[2]) {
			point.css('backgroundColor', item[2]);
		}
		if (item[3] !== undefined && item[4] !== undefined) {
			point.css({
				left: item[3],
				top: item[4]
			});
            //  任务一：暂存left、top到元素上
		}
            //  任务二：设置zIndex、重设位置


		component.append(point);
	})

	return component;
}