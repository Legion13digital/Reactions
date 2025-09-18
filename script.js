var ReactionsWidget = /** @class */ (function () {
    function ReactionsWidget() {
        this.buttons = document.querySelectorAll('.reaction__btn');
        this.counters = document.querySelectorAll('.reaction__counter');
        this.init();
    }
    ReactionsWidget.prototype.init = function () {
        var _this = this;
        this.buttons.forEach(function (btn, index) {
            btn.addEventListener('click', function () { return _this.handleReaction(index); });
        });
    };
    ReactionsWidget.prototype.handleReaction = function (index) {
        var btn = this.buttons[index];
        var counter = this.counters[index];
        btn.classList.add('leaping');
        setTimeout(function () {
            btn.classList.remove('leaping');
        }, 500);
        var currentCount = parseInt(counter.textContent || '0');
        counter.textContent = "" + (currentCount + 1);
    };
    return ReactionsWidget;
}());
document.addEventListener('DOMContentLoaded', function () {
    new ReactionsWidget();
});
