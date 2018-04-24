
export class Strip {

  constructor(config) {
    this.ratio = 0;
    this.groups = [];
    this.height = 0;

    this.idx = config.idx;
    this.styleParams = config.styleParams;
    this.container = config.container;
  }

  addGroup(group) {
    if (this.hasGroups) {
      this.lastGroup.isLastGroup = false;
    }
    this.groups.push(group);
    this.lastGroup.isLastGroup = true;
    this.lastGroup.stripWidth = this.height * this.ratio;

  }

  resizeToHeight(height) {
    this.height = height;
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

  isFull(newGroup, isLastImage) {

    if (!this.hasGroups) {
      return false;
    }

    const {galleryWidth} = this.container;
    const {oneRow, gallerySize} = this.styleParams;

    let isStripSmallEnough;
    if (oneRow) {
      isStripSmallEnough = false; //onerow layout is one long strip
    } else {
      const withNewGroup = ((galleryWidth / (this.ratio + newGroup.ratio)) - gallerySize); //start a new strip BEFORE adding the current group
      const withoutNewGroup = ((galleryWidth / (this.ratio)) - gallerySize); //start a new strip AFTER adding the current group
      if (isNaN(withNewGroup) || isNaN(withoutNewGroup)) {
        isStripSmallEnough = false;
      } else if (withoutNewGroup < 0) {
        //the strip is already too small
        isStripSmallEnough = true;
      } else if (withNewGroup < 0) {
        //adding the new group makes is small enough
        // check if adding the new group makes the strip TOO small
        //so - without the new group, the strip is larger than the required size - but adding the new group might make it too small
        isStripSmallEnough = (Math.abs(withoutNewGroup) < Math.abs(withNewGroup));

      } else {
        isStripSmallEnough = false;
      }


      if (isStripSmallEnough && isLastImage) {
        //if it is the last image - prefer adding it to the last strip rather putting it on a new strip
        isStripSmallEnough = ((Number(Math.abs(withoutNewGroup))) < Math.abs(withNewGroup));
      }

    }

    return isStripSmallEnough;

  }

  get hasGroups() {
    return this.groups.length > 0;
  }

  get lastGroup() {
    return this.groups[this.groups.length - 1];
  }

}