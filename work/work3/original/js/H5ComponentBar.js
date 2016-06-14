/* 柱图组件对象 */
var H5ComponentBar = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	$.each(cfg.data, function(idx, item) {
		console.log(item);

		var line = $('<div class="line"></div>');
		var name = $('<div class="name"></div>');
		var rate = $('<div class="rate"></div>');
		var per = $('<div class="per"></div>');

		var width = item[1] * 100 + '%';

		if (item[2]) {
			var bgStyle = 'style="background-color:'+item[2]+'"';
		}

		rate.html('<div class="bg" '+bgStyle+'></div>');

		rate.css('width', width);

		name.text(item[0]);

		line.append(name).append(rate).append(per);
		per.text(width);
		component.append(line);
	})

	return component;
}