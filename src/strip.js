
export class Strip {

  constructor(lastIdx) {
    this.ratio = 0;
    this.groups = [];
    this.height = 0;
    this.idx = (lastIdx || 0) + 1;
  }

  resizeToHeight(height) {
    let left = 0;
    let remainder = 0;
    for (const group of this.groups) {
      group.setLeft(left);
      // group.left = (left);
      group.width += remainder; //add the remainder from the last group round
      group.resizeToHeight(height);
      remainder = group.width;
      group.round();
      remainder -= group.width;
      left += group.width;
    }
  }


}
