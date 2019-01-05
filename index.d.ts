declare namespace jsdeep {
  function deepCopy<T>(value: T): T;
  function deepEqual<T>(a: T, b: T): boolean;
  function deepExists(value: any, prop: string|string[]): boolean;
  function deepFreeze<T>(value: T): T;
  function deepGet<R>(value: any, prop: string|string[]): R;
  function deepMerge<R>(...values: any[]): R;
  function deepSet<T, R>(obj: T, prop: string|string[], value: any): R;
}

export = jsdeep;
