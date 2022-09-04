export class likesComponent {
    constructor(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
        this.onClick = () => {
            console.log('btn clicked...');
            // Method 1
            // if(this._isSelected){
            //    this._likesCount--
            //    this._isSelected = false
            // } else {
            //    this._likesCount++
            //    this._isSelected = true
            // }
            // Method 2
            this._likesCount += (this._isSelected) ? -1 : 1;
            this._isSelected = !this._isSelected;
        };
    }
    get likesCount() {
        return this._likesCount;
    }
    get isSelected() {
        return this._isSelected;
    }
}
;
