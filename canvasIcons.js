var canvasIcons = (function() {   
    this.init = function() {
        this.elementList = [];
        this.getElements();
        console.log(this.elementList)
    };

    this.removeRedundant = function() {
        var unique = [];
        for (var i = 0; i < this.elementList.length; i++) {
            if (unique.indexOf(this.elementList[i]) < 0) 
                unique.push(this.elementList[i]);
        }
        this.elementList = unique;
        this.generateCanvas();
    };

    this.getElements = function() {
        this.elementList.forEach.call(document.getElementsByTagName('div'), function(element) {
            (function(names, i) {
                var classes = names.length;
                while (i < classes) {
                    if (names[i].indexOf('canvas-icon-') === 0)
                        this.elementList.push(names[i]);
                    else
                        ++i;
                    --classes;
                }
            }(element.classList, 0));
        });
        this.removeRedundant();
    };

    this.generateCanvas = function() {
        var itens = this.elementList;
        for (var index = 0; index < itens.length; index++) {
            // TODO: Use a createChildNode and append
            itens[index].innerHTML = '<canvas class="' + itens[index] + '"></class>';
        }
    };

    return {
        init: this.init.bind(this)
    }
})();