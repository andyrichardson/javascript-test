interface NumberListArgs {
  value: number;
  next?: NumberList;
}

export class NumberList {
  private pValue: number;
  private pNext: NumberList | undefined;

  /*
   * ASSIGN PROVIDED ARGUMENTS TO THE INSTANCE
   */
  constructor(arg: NumberListArgs) {
    // 1. Code here
  }

  public get value(): number {
    return this.pValue;
  }

  public get next(): NumberList {
    return this.pNext;
  }

  /*
   * SET THE NEXT LINK VALUE
   */
  public set next(list: NumberList) {
    // 2. Code here
  }

  /*
   * SET THE CURRENT LINK VALUE
   */
  public set value(value: number) {
    // 3. Code here
  }

  /*
   * PRINT THE VALUE OF THE NODE TO THE CONSOLE
  */
  public printValue(): void {
    // 4. Code here
  }

  /*
   * SEARCH THROUGH CURRENT AND NEXT NODES TO DETERMINE
   * WHETHER THE PROVIDED VALUE EXISTS.
  */
  public exists(n: number): boolean {
    // 5. Code here
    return false;
  }
}
