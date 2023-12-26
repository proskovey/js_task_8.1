export default class Team {
  constructor() {
    this.members = new Set();
    this.memberTypes = function () {
      const memberTypes = [];
      for (const member of this.members) {
        memberTypes.push(member.type);
      }
      return memberTypes;
    };
  }

  add(char) {
    const types = this.memberTypes();
    const result = types.find((item) => item === char.type);
    if (result === undefined) {
      this.members.add(char);
    } else {
      throw new Error('Такой персонаж уже существует');
    }
  }

  addAll(...chars) {
    const types = this.memberTypes();
    for (const char of chars) {
      const result = types.find((item) => item === char.type);
      if (result === undefined) {
        this.members.add(char);
        types.push(char.type);
      }
    }
  }

  toArray() {
    const arr = [];
    for (const item of this.members) {
      arr.push(item);
    }
    return arr;
  }
}
