/* 折线图组件对象 */
var H5ComponentPoyline = function(name, cfg) {
	var component = new H5ComponentBase(name, cfg);

	// 绘制网格线
	var w = cfg.width;
	var h = cfg.height;

	// 加入画布 - 背景层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	// 水平网格线 100份 -> 10份
	var step = 10;
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#aaa';

	window.ctx = ctx;

	for (var i = 0; i < step + 1; i++) {
		var y = (h / step) * i;
		ctx.moveTo(0, y);
		ctx.lineTo(w, y);
	}
	// 垂直网格线（根据项目的个数去分）
	step = cfg.data.length + 1;
	for (var i = 0; i < step + 1; i++) {
		var x = (w / step) * i;
		ctx.moveTo(x, 0);
		ctx.lineTo(x, h);
	}

	ctx.stroke();

	// 加入画布 - 数据层
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	// 绘制折现数据
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = '#ff8878';

	var x = 0;
	var y = 0;

	var row_w = (w / (cfg.data.length + 1))
	for (var i = 0; i < cfg.data.length; i++) {
		var item = cfg.data[i];
		console.log(item);

		x = row_w * i + row_w;
		y = h*(1-item[1]);
		ctx.moveTo(x, y);
		ctx.arc(x, y, 5, 0, 2 * Math.PI);
	}
	// 连线
	// 移动画笔到第一个数据的点位置
	ctx.moveTo(row_w, h*(1-cfg.data[0][1]));
	ctx.arc(row_w, h*(1-cfg.data[0][1]), 20, 0, 2 * Math.PI);

	ctx.stroke();

	return component;
}