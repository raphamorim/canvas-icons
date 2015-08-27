var canvasIcons = (function() {
    this.config = {
        icons: ['smile', 'email'],
        iconsPrefix: '.canvas-icon-'
    };

    this.render = function() {
        return {
            
            email: function(ctx) {
                // TO DO
            },

            smile: function(c) {
                c.ctx.beginPath();
                c.ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI, false);
                c.ctx.fillStyle = c.fillColor;
                c.ctx.fill();
                c.ctx.lineWidth = c.lineWidth || 0;
                c.ctx.strokeStyle = c.strokeColor || null;
                c.ctx.stroke();
            },
        }
    };

    this.init = function() {
        this.renderItems();
    };

    this.renderItems = function() {
        var self = this;
        self.config.icons.forEach(function(icon) {
            var elements = document.querySelectorAll(self.config.iconsPrefix + icon);
            if (elements) {
                for (var i = 0; i < elements.length; i++) {
                    var canvas = document.createElement('canvas');
                    canvas.style.height = elements[i].offsetHeight + "px";
                    canvas.style.width = elements[i].offsetWidth + "px";
                    elements[i].appendChild(canvas);
                    self.draw(icon).in(canvas);
                }
            }
        });
    }

    // Sync or Async render?? (For while Sync)
    this.draw = function(item) {
        this.item = item;
        return this;
    };

    this.in = function(el) {
        var render = this.render();
        if (typeof render[this.item] === 'function') {
            var vars = new Object();
            vars.w = el.offsetWidth;
            vars.h = el.offsetHeight;
            vars.x = (vars.w/3);
            vars.y = (vars.h/3);
            vars.r = ((vars.x < vars.y ? vars.x : vars.y) / 1.13);
            vars.ctx = el.getContext('2d');
            vars.color = '0,0,0';
            console.log(vars)
            return render[this.item](vars);
        }
    };

    return {
        init: this.init.bind(this),
        draw: this.draw.bind(this)
    }
})();