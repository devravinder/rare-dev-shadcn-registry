
type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends Array<unknown> ? K : never;
}[keyof T];


type Key<T>= keyof T 
type ValueType<T> =T[keyof T] 