export class Column {
  constructor(idx, width, cubeRatio) {
    this.idx = idx;
    this.groups = [];
    this.height = 0;
    this.width = width;
    this.cubeRatio = cubeRatio;
  }

  addGroup(group) {
    this.addGroups([group]);
  }

  addGroups(groups) {
    this.groups = this.groups.concat(groups);
  }
}
