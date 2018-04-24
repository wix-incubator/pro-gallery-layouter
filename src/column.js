export class Column {
  constructor() {
    this.groups = [];
    this.height = 0;
  }

  addGroup(group) {
    this.addGroups([group]);
  }

  addGroups(groups) {
    this.groups = this.groups.concat(groups);
  }
}
