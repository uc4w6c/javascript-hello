function Triangle(base, height) {
    let _base;
    let _height;

    // TODO: これが上にないとエラーになる理由を調べる
    let _checkArgs = function(val) {
        return (typeof val == 'number' && val > 0);
    }

    if (_checkArgs(base)) { this._base = base; }
    if (_checkArgs(height)) { this._height = height; }

    Object.freeze(this._base);
    Object.freeze(this._height);

    this.getBase = function() { return this._base; }
    this.getHeight = function() { return this._height; }
}

Triangle.prototype.getArea = function() {
    return this.getBase() * this.getHeight() / 2;
}

let t = new Triangle(10, 2);
console.log('三角形の底辺' + t.getBase());
console.log('三角形の高さ' + t.getHeight());
console.log('三角形の面積' + t.getArea());
