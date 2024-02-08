export type RangeType<
  T extends number,
  A extends any[] = []
> = A["length"] extends T
  ? [T, ...A][number]
  : RangeType<T, [A["length"], ...A]>;
