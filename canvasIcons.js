var canvasIcons = (function() {   
    this.init = function() {
        this.elementList = [];
        this.getElements();
        this.generateCanvas();
        console.log(this.elementList)
    };

    this.getElements = function() {
        this.elementList.forEach.call(document.getElementsByTagName('div'), function(element) {
            (function(names, i) {
                while (i < names.length) {
                    var name = names[i];
                    if (name.indexOf('canvas-icon-') === 0) {
                        names.remove(name);
                        this.elementList.push(name);
                    } else {
                        ++i;
                    }
                }
            }(element.classList, 0));
        });
    };
    this.generateCanvas = function() {
        var itens = this.elementList;
        for (var index = 0; index < itens.length; index++) {
            // TODO: Use a createChildNode and append
            itens[index].innerHTML = '<canvas class="' + itens[index] + '"></class>'
        }
    };

    return {
        init: this.init.bind(this)
    }
})();