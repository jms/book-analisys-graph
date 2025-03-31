
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BookText
 * 
 */
export type BookText = $Result.DefaultSelection<Prisma.$BookTextPayload>
/**
 * Model LlmResponse
 * 
 */
export type LlmResponse = $Result.DefaultSelection<Prisma.$LlmResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BookTexts
 * const bookTexts = await prisma.bookText.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BookTexts
   * const bookTexts = await prisma.bookText.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookText`: Exposes CRUD operations for the **BookText** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookTexts
    * const bookTexts = await prisma.bookText.findMany()
    * ```
    */
  get bookText(): Prisma.BookTextDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.llmResponse`: Exposes CRUD operations for the **LlmResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LlmResponses
    * const llmResponses = await prisma.llmResponse.findMany()
    * ```
    */
  get llmResponse(): Prisma.LlmResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BookText: 'BookText',
    LlmResponse: 'LlmResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookText" | "llmResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BookText: {
        payload: Prisma.$BookTextPayload<ExtArgs>
        fields: Prisma.BookTextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookTextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookTextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>
          }
          findFirst: {
            args: Prisma.BookTextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookTextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>
          }
          findMany: {
            args: Prisma.BookTextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>[]
          }
          create: {
            args: Prisma.BookTextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>
          }
          createMany: {
            args: Prisma.BookTextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookTextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>[]
          }
          delete: {
            args: Prisma.BookTextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>
          }
          update: {
            args: Prisma.BookTextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>
          }
          deleteMany: {
            args: Prisma.BookTextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookTextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookTextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>[]
          }
          upsert: {
            args: Prisma.BookTextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTextPayload>
          }
          aggregate: {
            args: Prisma.BookTextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookText>
          }
          groupBy: {
            args: Prisma.BookTextGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookTextGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookTextCountArgs<ExtArgs>
            result: $Utils.Optional<BookTextCountAggregateOutputType> | number
          }
        }
      }
      LlmResponse: {
        payload: Prisma.$LlmResponsePayload<ExtArgs>
        fields: Prisma.LlmResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LlmResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LlmResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>
          }
          findFirst: {
            args: Prisma.LlmResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LlmResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>
          }
          findMany: {
            args: Prisma.LlmResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>[]
          }
          create: {
            args: Prisma.LlmResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>
          }
          createMany: {
            args: Prisma.LlmResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LlmResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>[]
          }
          delete: {
            args: Prisma.LlmResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>
          }
          update: {
            args: Prisma.LlmResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>
          }
          deleteMany: {
            args: Prisma.LlmResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LlmResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LlmResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>[]
          }
          upsert: {
            args: Prisma.LlmResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LlmResponsePayload>
          }
          aggregate: {
            args: Prisma.LlmResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLlmResponse>
          }
          groupBy: {
            args: Prisma.LlmResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LlmResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LlmResponseCountArgs<ExtArgs>
            result: $Utils.Optional<LlmResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bookText?: BookTextOmit
    llmResponse?: LlmResponseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BookText
   */

  export type AggregateBookText = {
    _count: BookTextCountAggregateOutputType | null
    _avg: BookTextAvgAggregateOutputType | null
    _sum: BookTextSumAggregateOutputType | null
    _min: BookTextMinAggregateOutputType | null
    _max: BookTextMaxAggregateOutputType | null
  }

  export type BookTextAvgAggregateOutputType = {
    bookId: number | null
  }

  export type BookTextSumAggregateOutputType = {
    bookId: number | null
  }

  export type BookTextMinAggregateOutputType = {
    bookId: number | null
    text: string | null
  }

  export type BookTextMaxAggregateOutputType = {
    bookId: number | null
    text: string | null
  }

  export type BookTextCountAggregateOutputType = {
    bookId: number
    text: number
    _all: number
  }


  export type BookTextAvgAggregateInputType = {
    bookId?: true
  }

  export type BookTextSumAggregateInputType = {
    bookId?: true
  }

  export type BookTextMinAggregateInputType = {
    bookId?: true
    text?: true
  }

  export type BookTextMaxAggregateInputType = {
    bookId?: true
    text?: true
  }

  export type BookTextCountAggregateInputType = {
    bookId?: true
    text?: true
    _all?: true
  }

  export type BookTextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookText to aggregate.
     */
    where?: BookTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTexts to fetch.
     */
    orderBy?: BookTextOrderByWithRelationInput | BookTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookTexts
    **/
    _count?: true | BookTextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookTextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookTextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookTextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookTextMaxAggregateInputType
  }

  export type GetBookTextAggregateType<T extends BookTextAggregateArgs> = {
        [P in keyof T & keyof AggregateBookText]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookText[P]>
      : GetScalarType<T[P], AggregateBookText[P]>
  }




  export type BookTextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTextWhereInput
    orderBy?: BookTextOrderByWithAggregationInput | BookTextOrderByWithAggregationInput[]
    by: BookTextScalarFieldEnum[] | BookTextScalarFieldEnum
    having?: BookTextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookTextCountAggregateInputType | true
    _avg?: BookTextAvgAggregateInputType
    _sum?: BookTextSumAggregateInputType
    _min?: BookTextMinAggregateInputType
    _max?: BookTextMaxAggregateInputType
  }

  export type BookTextGroupByOutputType = {
    bookId: number
    text: string
    _count: BookTextCountAggregateOutputType | null
    _avg: BookTextAvgAggregateOutputType | null
    _sum: BookTextSumAggregateOutputType | null
    _min: BookTextMinAggregateOutputType | null
    _max: BookTextMaxAggregateOutputType | null
  }

  type GetBookTextGroupByPayload<T extends BookTextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookTextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookTextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookTextGroupByOutputType[P]>
            : GetScalarType<T[P], BookTextGroupByOutputType[P]>
        }
      >
    >


  export type BookTextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    text?: boolean
  }, ExtArgs["result"]["bookText"]>

  export type BookTextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    text?: boolean
  }, ExtArgs["result"]["bookText"]>

  export type BookTextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    text?: boolean
  }, ExtArgs["result"]["bookText"]>

  export type BookTextSelectScalar = {
    bookId?: boolean
    text?: boolean
  }

  export type BookTextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "text", ExtArgs["result"]["bookText"]>

  export type $BookTextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookText"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bookId: number
      text: string
    }, ExtArgs["result"]["bookText"]>
    composites: {}
  }

  type BookTextGetPayload<S extends boolean | null | undefined | BookTextDefaultArgs> = $Result.GetResult<Prisma.$BookTextPayload, S>

  type BookTextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookTextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookTextCountAggregateInputType | true
    }

  export interface BookTextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookText'], meta: { name: 'BookText' } }
    /**
     * Find zero or one BookText that matches the filter.
     * @param {BookTextFindUniqueArgs} args - Arguments to find a BookText
     * @example
     * // Get one BookText
     * const bookText = await prisma.bookText.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookTextFindUniqueArgs>(args: SelectSubset<T, BookTextFindUniqueArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookText that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookTextFindUniqueOrThrowArgs} args - Arguments to find a BookText
     * @example
     * // Get one BookText
     * const bookText = await prisma.bookText.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookTextFindUniqueOrThrowArgs>(args: SelectSubset<T, BookTextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookText that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextFindFirstArgs} args - Arguments to find a BookText
     * @example
     * // Get one BookText
     * const bookText = await prisma.bookText.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookTextFindFirstArgs>(args?: SelectSubset<T, BookTextFindFirstArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookText that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextFindFirstOrThrowArgs} args - Arguments to find a BookText
     * @example
     * // Get one BookText
     * const bookText = await prisma.bookText.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookTextFindFirstOrThrowArgs>(args?: SelectSubset<T, BookTextFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookTexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookTexts
     * const bookTexts = await prisma.bookText.findMany()
     * 
     * // Get first 10 BookTexts
     * const bookTexts = await prisma.bookText.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookTextWithBookIdOnly = await prisma.bookText.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends BookTextFindManyArgs>(args?: SelectSubset<T, BookTextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookText.
     * @param {BookTextCreateArgs} args - Arguments to create a BookText.
     * @example
     * // Create one BookText
     * const BookText = await prisma.bookText.create({
     *   data: {
     *     // ... data to create a BookText
     *   }
     * })
     * 
     */
    create<T extends BookTextCreateArgs>(args: SelectSubset<T, BookTextCreateArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookTexts.
     * @param {BookTextCreateManyArgs} args - Arguments to create many BookTexts.
     * @example
     * // Create many BookTexts
     * const bookText = await prisma.bookText.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookTextCreateManyArgs>(args?: SelectSubset<T, BookTextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookTexts and returns the data saved in the database.
     * @param {BookTextCreateManyAndReturnArgs} args - Arguments to create many BookTexts.
     * @example
     * // Create many BookTexts
     * const bookText = await prisma.bookText.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookTexts and only return the `bookId`
     * const bookTextWithBookIdOnly = await prisma.bookText.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookTextCreateManyAndReturnArgs>(args?: SelectSubset<T, BookTextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookText.
     * @param {BookTextDeleteArgs} args - Arguments to delete one BookText.
     * @example
     * // Delete one BookText
     * const BookText = await prisma.bookText.delete({
     *   where: {
     *     // ... filter to delete one BookText
     *   }
     * })
     * 
     */
    delete<T extends BookTextDeleteArgs>(args: SelectSubset<T, BookTextDeleteArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookText.
     * @param {BookTextUpdateArgs} args - Arguments to update one BookText.
     * @example
     * // Update one BookText
     * const bookText = await prisma.bookText.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookTextUpdateArgs>(args: SelectSubset<T, BookTextUpdateArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookTexts.
     * @param {BookTextDeleteManyArgs} args - Arguments to filter BookTexts to delete.
     * @example
     * // Delete a few BookTexts
     * const { count } = await prisma.bookText.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookTextDeleteManyArgs>(args?: SelectSubset<T, BookTextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookTexts
     * const bookText = await prisma.bookText.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookTextUpdateManyArgs>(args: SelectSubset<T, BookTextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTexts and returns the data updated in the database.
     * @param {BookTextUpdateManyAndReturnArgs} args - Arguments to update many BookTexts.
     * @example
     * // Update many BookTexts
     * const bookText = await prisma.bookText.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookTexts and only return the `bookId`
     * const bookTextWithBookIdOnly = await prisma.bookText.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookTextUpdateManyAndReturnArgs>(args: SelectSubset<T, BookTextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookText.
     * @param {BookTextUpsertArgs} args - Arguments to update or create a BookText.
     * @example
     * // Update or create a BookText
     * const bookText = await prisma.bookText.upsert({
     *   create: {
     *     // ... data to create a BookText
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookText we want to update
     *   }
     * })
     */
    upsert<T extends BookTextUpsertArgs>(args: SelectSubset<T, BookTextUpsertArgs<ExtArgs>>): Prisma__BookTextClient<$Result.GetResult<Prisma.$BookTextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookTexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextCountArgs} args - Arguments to filter BookTexts to count.
     * @example
     * // Count the number of BookTexts
     * const count = await prisma.bookText.count({
     *   where: {
     *     // ... the filter for the BookTexts we want to count
     *   }
     * })
    **/
    count<T extends BookTextCountArgs>(
      args?: Subset<T, BookTextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookTextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookTextAggregateArgs>(args: Subset<T, BookTextAggregateArgs>): Prisma.PrismaPromise<GetBookTextAggregateType<T>>

    /**
     * Group by BookText.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTextGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookTextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookTextGroupByArgs['orderBy'] }
        : { orderBy?: BookTextGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookTextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookTextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookText model
   */
  readonly fields: BookTextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookText.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookTextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookText model
   */ 
  interface BookTextFieldRefs {
    readonly bookId: FieldRef<"BookText", 'Int'>
    readonly text: FieldRef<"BookText", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookText findUnique
   */
  export type BookTextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * Filter, which BookText to fetch.
     */
    where: BookTextWhereUniqueInput
  }

  /**
   * BookText findUniqueOrThrow
   */
  export type BookTextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * Filter, which BookText to fetch.
     */
    where: BookTextWhereUniqueInput
  }

  /**
   * BookText findFirst
   */
  export type BookTextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * Filter, which BookText to fetch.
     */
    where?: BookTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTexts to fetch.
     */
    orderBy?: BookTextOrderByWithRelationInput | BookTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTexts.
     */
    cursor?: BookTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTexts.
     */
    distinct?: BookTextScalarFieldEnum | BookTextScalarFieldEnum[]
  }

  /**
   * BookText findFirstOrThrow
   */
  export type BookTextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * Filter, which BookText to fetch.
     */
    where?: BookTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTexts to fetch.
     */
    orderBy?: BookTextOrderByWithRelationInput | BookTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTexts.
     */
    cursor?: BookTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTexts.
     */
    distinct?: BookTextScalarFieldEnum | BookTextScalarFieldEnum[]
  }

  /**
   * BookText findMany
   */
  export type BookTextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * Filter, which BookTexts to fetch.
     */
    where?: BookTextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTexts to fetch.
     */
    orderBy?: BookTextOrderByWithRelationInput | BookTextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookTexts.
     */
    cursor?: BookTextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTexts.
     */
    skip?: number
    distinct?: BookTextScalarFieldEnum | BookTextScalarFieldEnum[]
  }

  /**
   * BookText create
   */
  export type BookTextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * The data needed to create a BookText.
     */
    data: XOR<BookTextCreateInput, BookTextUncheckedCreateInput>
  }

  /**
   * BookText createMany
   */
  export type BookTextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookTexts.
     */
    data: BookTextCreateManyInput | BookTextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookText createManyAndReturn
   */
  export type BookTextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * The data used to create many BookTexts.
     */
    data: BookTextCreateManyInput | BookTextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookText update
   */
  export type BookTextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * The data needed to update a BookText.
     */
    data: XOR<BookTextUpdateInput, BookTextUncheckedUpdateInput>
    /**
     * Choose, which BookText to update.
     */
    where: BookTextWhereUniqueInput
  }

  /**
   * BookText updateMany
   */
  export type BookTextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookTexts.
     */
    data: XOR<BookTextUpdateManyMutationInput, BookTextUncheckedUpdateManyInput>
    /**
     * Filter which BookTexts to update
     */
    where?: BookTextWhereInput
    /**
     * Limit how many BookTexts to update.
     */
    limit?: number
  }

  /**
   * BookText updateManyAndReturn
   */
  export type BookTextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * The data used to update BookTexts.
     */
    data: XOR<BookTextUpdateManyMutationInput, BookTextUncheckedUpdateManyInput>
    /**
     * Filter which BookTexts to update
     */
    where?: BookTextWhereInput
    /**
     * Limit how many BookTexts to update.
     */
    limit?: number
  }

  /**
   * BookText upsert
   */
  export type BookTextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * The filter to search for the BookText to update in case it exists.
     */
    where: BookTextWhereUniqueInput
    /**
     * In case the BookText found by the `where` argument doesn't exist, create a new BookText with this data.
     */
    create: XOR<BookTextCreateInput, BookTextUncheckedCreateInput>
    /**
     * In case the BookText was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookTextUpdateInput, BookTextUncheckedUpdateInput>
  }

  /**
   * BookText delete
   */
  export type BookTextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
    /**
     * Filter which BookText to delete.
     */
    where: BookTextWhereUniqueInput
  }

  /**
   * BookText deleteMany
   */
  export type BookTextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTexts to delete
     */
    where?: BookTextWhereInput
    /**
     * Limit how many BookTexts to delete.
     */
    limit?: number
  }

  /**
   * BookText without action
   */
  export type BookTextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookText
     */
    select?: BookTextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookText
     */
    omit?: BookTextOmit<ExtArgs> | null
  }


  /**
   * Model LlmResponse
   */

  export type AggregateLlmResponse = {
    _count: LlmResponseCountAggregateOutputType | null
    _avg: LlmResponseAvgAggregateOutputType | null
    _sum: LlmResponseSumAggregateOutputType | null
    _min: LlmResponseMinAggregateOutputType | null
    _max: LlmResponseMaxAggregateOutputType | null
  }

  export type LlmResponseAvgAggregateOutputType = {
    bookId: number | null
  }

  export type LlmResponseSumAggregateOutputType = {
    bookId: number | null
  }

  export type LlmResponseMinAggregateOutputType = {
    bookId: number | null
    prompt: string | null
    response: string | null
  }

  export type LlmResponseMaxAggregateOutputType = {
    bookId: number | null
    prompt: string | null
    response: string | null
  }

  export type LlmResponseCountAggregateOutputType = {
    bookId: number
    prompt: number
    response: number
    _all: number
  }


  export type LlmResponseAvgAggregateInputType = {
    bookId?: true
  }

  export type LlmResponseSumAggregateInputType = {
    bookId?: true
  }

  export type LlmResponseMinAggregateInputType = {
    bookId?: true
    prompt?: true
    response?: true
  }

  export type LlmResponseMaxAggregateInputType = {
    bookId?: true
    prompt?: true
    response?: true
  }

  export type LlmResponseCountAggregateInputType = {
    bookId?: true
    prompt?: true
    response?: true
    _all?: true
  }

  export type LlmResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LlmResponse to aggregate.
     */
    where?: LlmResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmResponses to fetch.
     */
    orderBy?: LlmResponseOrderByWithRelationInput | LlmResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LlmResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LlmResponses
    **/
    _count?: true | LlmResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LlmResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LlmResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LlmResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LlmResponseMaxAggregateInputType
  }

  export type GetLlmResponseAggregateType<T extends LlmResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateLlmResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLlmResponse[P]>
      : GetScalarType<T[P], AggregateLlmResponse[P]>
  }




  export type LlmResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LlmResponseWhereInput
    orderBy?: LlmResponseOrderByWithAggregationInput | LlmResponseOrderByWithAggregationInput[]
    by: LlmResponseScalarFieldEnum[] | LlmResponseScalarFieldEnum
    having?: LlmResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LlmResponseCountAggregateInputType | true
    _avg?: LlmResponseAvgAggregateInputType
    _sum?: LlmResponseSumAggregateInputType
    _min?: LlmResponseMinAggregateInputType
    _max?: LlmResponseMaxAggregateInputType
  }

  export type LlmResponseGroupByOutputType = {
    bookId: number
    prompt: string
    response: string
    _count: LlmResponseCountAggregateOutputType | null
    _avg: LlmResponseAvgAggregateOutputType | null
    _sum: LlmResponseSumAggregateOutputType | null
    _min: LlmResponseMinAggregateOutputType | null
    _max: LlmResponseMaxAggregateOutputType | null
  }

  type GetLlmResponseGroupByPayload<T extends LlmResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LlmResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LlmResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LlmResponseGroupByOutputType[P]>
            : GetScalarType<T[P], LlmResponseGroupByOutputType[P]>
        }
      >
    >


  export type LlmResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    prompt?: boolean
    response?: boolean
  }, ExtArgs["result"]["llmResponse"]>

  export type LlmResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    prompt?: boolean
    response?: boolean
  }, ExtArgs["result"]["llmResponse"]>

  export type LlmResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    prompt?: boolean
    response?: boolean
  }, ExtArgs["result"]["llmResponse"]>

  export type LlmResponseSelectScalar = {
    bookId?: boolean
    prompt?: boolean
    response?: boolean
  }

  export type LlmResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "prompt" | "response", ExtArgs["result"]["llmResponse"]>

  export type $LlmResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LlmResponse"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bookId: number
      prompt: string
      response: string
    }, ExtArgs["result"]["llmResponse"]>
    composites: {}
  }

  type LlmResponseGetPayload<S extends boolean | null | undefined | LlmResponseDefaultArgs> = $Result.GetResult<Prisma.$LlmResponsePayload, S>

  type LlmResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LlmResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LlmResponseCountAggregateInputType | true
    }

  export interface LlmResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LlmResponse'], meta: { name: 'LlmResponse' } }
    /**
     * Find zero or one LlmResponse that matches the filter.
     * @param {LlmResponseFindUniqueArgs} args - Arguments to find a LlmResponse
     * @example
     * // Get one LlmResponse
     * const llmResponse = await prisma.llmResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LlmResponseFindUniqueArgs>(args: SelectSubset<T, LlmResponseFindUniqueArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LlmResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LlmResponseFindUniqueOrThrowArgs} args - Arguments to find a LlmResponse
     * @example
     * // Get one LlmResponse
     * const llmResponse = await prisma.llmResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LlmResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, LlmResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LlmResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseFindFirstArgs} args - Arguments to find a LlmResponse
     * @example
     * // Get one LlmResponse
     * const llmResponse = await prisma.llmResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LlmResponseFindFirstArgs>(args?: SelectSubset<T, LlmResponseFindFirstArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LlmResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseFindFirstOrThrowArgs} args - Arguments to find a LlmResponse
     * @example
     * // Get one LlmResponse
     * const llmResponse = await prisma.llmResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LlmResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, LlmResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LlmResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LlmResponses
     * const llmResponses = await prisma.llmResponse.findMany()
     * 
     * // Get first 10 LlmResponses
     * const llmResponses = await prisma.llmResponse.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const llmResponseWithBookIdOnly = await prisma.llmResponse.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends LlmResponseFindManyArgs>(args?: SelectSubset<T, LlmResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LlmResponse.
     * @param {LlmResponseCreateArgs} args - Arguments to create a LlmResponse.
     * @example
     * // Create one LlmResponse
     * const LlmResponse = await prisma.llmResponse.create({
     *   data: {
     *     // ... data to create a LlmResponse
     *   }
     * })
     * 
     */
    create<T extends LlmResponseCreateArgs>(args: SelectSubset<T, LlmResponseCreateArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LlmResponses.
     * @param {LlmResponseCreateManyArgs} args - Arguments to create many LlmResponses.
     * @example
     * // Create many LlmResponses
     * const llmResponse = await prisma.llmResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LlmResponseCreateManyArgs>(args?: SelectSubset<T, LlmResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LlmResponses and returns the data saved in the database.
     * @param {LlmResponseCreateManyAndReturnArgs} args - Arguments to create many LlmResponses.
     * @example
     * // Create many LlmResponses
     * const llmResponse = await prisma.llmResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LlmResponses and only return the `bookId`
     * const llmResponseWithBookIdOnly = await prisma.llmResponse.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LlmResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, LlmResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LlmResponse.
     * @param {LlmResponseDeleteArgs} args - Arguments to delete one LlmResponse.
     * @example
     * // Delete one LlmResponse
     * const LlmResponse = await prisma.llmResponse.delete({
     *   where: {
     *     // ... filter to delete one LlmResponse
     *   }
     * })
     * 
     */
    delete<T extends LlmResponseDeleteArgs>(args: SelectSubset<T, LlmResponseDeleteArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LlmResponse.
     * @param {LlmResponseUpdateArgs} args - Arguments to update one LlmResponse.
     * @example
     * // Update one LlmResponse
     * const llmResponse = await prisma.llmResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LlmResponseUpdateArgs>(args: SelectSubset<T, LlmResponseUpdateArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LlmResponses.
     * @param {LlmResponseDeleteManyArgs} args - Arguments to filter LlmResponses to delete.
     * @example
     * // Delete a few LlmResponses
     * const { count } = await prisma.llmResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LlmResponseDeleteManyArgs>(args?: SelectSubset<T, LlmResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LlmResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LlmResponses
     * const llmResponse = await prisma.llmResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LlmResponseUpdateManyArgs>(args: SelectSubset<T, LlmResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LlmResponses and returns the data updated in the database.
     * @param {LlmResponseUpdateManyAndReturnArgs} args - Arguments to update many LlmResponses.
     * @example
     * // Update many LlmResponses
     * const llmResponse = await prisma.llmResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LlmResponses and only return the `bookId`
     * const llmResponseWithBookIdOnly = await prisma.llmResponse.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LlmResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, LlmResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LlmResponse.
     * @param {LlmResponseUpsertArgs} args - Arguments to update or create a LlmResponse.
     * @example
     * // Update or create a LlmResponse
     * const llmResponse = await prisma.llmResponse.upsert({
     *   create: {
     *     // ... data to create a LlmResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LlmResponse we want to update
     *   }
     * })
     */
    upsert<T extends LlmResponseUpsertArgs>(args: SelectSubset<T, LlmResponseUpsertArgs<ExtArgs>>): Prisma__LlmResponseClient<$Result.GetResult<Prisma.$LlmResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LlmResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseCountArgs} args - Arguments to filter LlmResponses to count.
     * @example
     * // Count the number of LlmResponses
     * const count = await prisma.llmResponse.count({
     *   where: {
     *     // ... the filter for the LlmResponses we want to count
     *   }
     * })
    **/
    count<T extends LlmResponseCountArgs>(
      args?: Subset<T, LlmResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LlmResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LlmResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LlmResponseAggregateArgs>(args: Subset<T, LlmResponseAggregateArgs>): Prisma.PrismaPromise<GetLlmResponseAggregateType<T>>

    /**
     * Group by LlmResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LlmResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LlmResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LlmResponseGroupByArgs['orderBy'] }
        : { orderBy?: LlmResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LlmResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLlmResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LlmResponse model
   */
  readonly fields: LlmResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LlmResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LlmResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LlmResponse model
   */ 
  interface LlmResponseFieldRefs {
    readonly bookId: FieldRef<"LlmResponse", 'Int'>
    readonly prompt: FieldRef<"LlmResponse", 'String'>
    readonly response: FieldRef<"LlmResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LlmResponse findUnique
   */
  export type LlmResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * Filter, which LlmResponse to fetch.
     */
    where: LlmResponseWhereUniqueInput
  }

  /**
   * LlmResponse findUniqueOrThrow
   */
  export type LlmResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * Filter, which LlmResponse to fetch.
     */
    where: LlmResponseWhereUniqueInput
  }

  /**
   * LlmResponse findFirst
   */
  export type LlmResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * Filter, which LlmResponse to fetch.
     */
    where?: LlmResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmResponses to fetch.
     */
    orderBy?: LlmResponseOrderByWithRelationInput | LlmResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LlmResponses.
     */
    cursor?: LlmResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LlmResponses.
     */
    distinct?: LlmResponseScalarFieldEnum | LlmResponseScalarFieldEnum[]
  }

  /**
   * LlmResponse findFirstOrThrow
   */
  export type LlmResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * Filter, which LlmResponse to fetch.
     */
    where?: LlmResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmResponses to fetch.
     */
    orderBy?: LlmResponseOrderByWithRelationInput | LlmResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LlmResponses.
     */
    cursor?: LlmResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LlmResponses.
     */
    distinct?: LlmResponseScalarFieldEnum | LlmResponseScalarFieldEnum[]
  }

  /**
   * LlmResponse findMany
   */
  export type LlmResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * Filter, which LlmResponses to fetch.
     */
    where?: LlmResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LlmResponses to fetch.
     */
    orderBy?: LlmResponseOrderByWithRelationInput | LlmResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LlmResponses.
     */
    cursor?: LlmResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LlmResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LlmResponses.
     */
    skip?: number
    distinct?: LlmResponseScalarFieldEnum | LlmResponseScalarFieldEnum[]
  }

  /**
   * LlmResponse create
   */
  export type LlmResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * The data needed to create a LlmResponse.
     */
    data: XOR<LlmResponseCreateInput, LlmResponseUncheckedCreateInput>
  }

  /**
   * LlmResponse createMany
   */
  export type LlmResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LlmResponses.
     */
    data: LlmResponseCreateManyInput | LlmResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LlmResponse createManyAndReturn
   */
  export type LlmResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * The data used to create many LlmResponses.
     */
    data: LlmResponseCreateManyInput | LlmResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LlmResponse update
   */
  export type LlmResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * The data needed to update a LlmResponse.
     */
    data: XOR<LlmResponseUpdateInput, LlmResponseUncheckedUpdateInput>
    /**
     * Choose, which LlmResponse to update.
     */
    where: LlmResponseWhereUniqueInput
  }

  /**
   * LlmResponse updateMany
   */
  export type LlmResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LlmResponses.
     */
    data: XOR<LlmResponseUpdateManyMutationInput, LlmResponseUncheckedUpdateManyInput>
    /**
     * Filter which LlmResponses to update
     */
    where?: LlmResponseWhereInput
    /**
     * Limit how many LlmResponses to update.
     */
    limit?: number
  }

  /**
   * LlmResponse updateManyAndReturn
   */
  export type LlmResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * The data used to update LlmResponses.
     */
    data: XOR<LlmResponseUpdateManyMutationInput, LlmResponseUncheckedUpdateManyInput>
    /**
     * Filter which LlmResponses to update
     */
    where?: LlmResponseWhereInput
    /**
     * Limit how many LlmResponses to update.
     */
    limit?: number
  }

  /**
   * LlmResponse upsert
   */
  export type LlmResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * The filter to search for the LlmResponse to update in case it exists.
     */
    where: LlmResponseWhereUniqueInput
    /**
     * In case the LlmResponse found by the `where` argument doesn't exist, create a new LlmResponse with this data.
     */
    create: XOR<LlmResponseCreateInput, LlmResponseUncheckedCreateInput>
    /**
     * In case the LlmResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LlmResponseUpdateInput, LlmResponseUncheckedUpdateInput>
  }

  /**
   * LlmResponse delete
   */
  export type LlmResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
    /**
     * Filter which LlmResponse to delete.
     */
    where: LlmResponseWhereUniqueInput
  }

  /**
   * LlmResponse deleteMany
   */
  export type LlmResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LlmResponses to delete
     */
    where?: LlmResponseWhereInput
    /**
     * Limit how many LlmResponses to delete.
     */
    limit?: number
  }

  /**
   * LlmResponse without action
   */
  export type LlmResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LlmResponse
     */
    select?: LlmResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LlmResponse
     */
    omit?: LlmResponseOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookTextScalarFieldEnum: {
    bookId: 'bookId',
    text: 'text'
  };

  export type BookTextScalarFieldEnum = (typeof BookTextScalarFieldEnum)[keyof typeof BookTextScalarFieldEnum]


  export const LlmResponseScalarFieldEnum: {
    bookId: 'bookId',
    prompt: 'prompt',
    response: 'response'
  };

  export type LlmResponseScalarFieldEnum = (typeof LlmResponseScalarFieldEnum)[keyof typeof LlmResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BookTextWhereInput = {
    AND?: BookTextWhereInput | BookTextWhereInput[]
    OR?: BookTextWhereInput[]
    NOT?: BookTextWhereInput | BookTextWhereInput[]
    bookId?: IntFilter<"BookText"> | number
    text?: StringFilter<"BookText"> | string
  }

  export type BookTextOrderByWithRelationInput = {
    bookId?: SortOrder
    text?: SortOrder
  }

  export type BookTextWhereUniqueInput = Prisma.AtLeast<{
    bookId?: number
    AND?: BookTextWhereInput | BookTextWhereInput[]
    OR?: BookTextWhereInput[]
    NOT?: BookTextWhereInput | BookTextWhereInput[]
    text?: StringFilter<"BookText"> | string
  }, "bookId">

  export type BookTextOrderByWithAggregationInput = {
    bookId?: SortOrder
    text?: SortOrder
    _count?: BookTextCountOrderByAggregateInput
    _avg?: BookTextAvgOrderByAggregateInput
    _max?: BookTextMaxOrderByAggregateInput
    _min?: BookTextMinOrderByAggregateInput
    _sum?: BookTextSumOrderByAggregateInput
  }

  export type BookTextScalarWhereWithAggregatesInput = {
    AND?: BookTextScalarWhereWithAggregatesInput | BookTextScalarWhereWithAggregatesInput[]
    OR?: BookTextScalarWhereWithAggregatesInput[]
    NOT?: BookTextScalarWhereWithAggregatesInput | BookTextScalarWhereWithAggregatesInput[]
    bookId?: IntWithAggregatesFilter<"BookText"> | number
    text?: StringWithAggregatesFilter<"BookText"> | string
  }

  export type LlmResponseWhereInput = {
    AND?: LlmResponseWhereInput | LlmResponseWhereInput[]
    OR?: LlmResponseWhereInput[]
    NOT?: LlmResponseWhereInput | LlmResponseWhereInput[]
    bookId?: IntFilter<"LlmResponse"> | number
    prompt?: StringFilter<"LlmResponse"> | string
    response?: StringFilter<"LlmResponse"> | string
  }

  export type LlmResponseOrderByWithRelationInput = {
    bookId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type LlmResponseWhereUniqueInput = Prisma.AtLeast<{
    bookId_prompt?: LlmResponseBookIdPromptCompoundUniqueInput
    AND?: LlmResponseWhereInput | LlmResponseWhereInput[]
    OR?: LlmResponseWhereInput[]
    NOT?: LlmResponseWhereInput | LlmResponseWhereInput[]
    bookId?: IntFilter<"LlmResponse"> | number
    prompt?: StringFilter<"LlmResponse"> | string
    response?: StringFilter<"LlmResponse"> | string
  }, "bookId_prompt">

  export type LlmResponseOrderByWithAggregationInput = {
    bookId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    _count?: LlmResponseCountOrderByAggregateInput
    _avg?: LlmResponseAvgOrderByAggregateInput
    _max?: LlmResponseMaxOrderByAggregateInput
    _min?: LlmResponseMinOrderByAggregateInput
    _sum?: LlmResponseSumOrderByAggregateInput
  }

  export type LlmResponseScalarWhereWithAggregatesInput = {
    AND?: LlmResponseScalarWhereWithAggregatesInput | LlmResponseScalarWhereWithAggregatesInput[]
    OR?: LlmResponseScalarWhereWithAggregatesInput[]
    NOT?: LlmResponseScalarWhereWithAggregatesInput | LlmResponseScalarWhereWithAggregatesInput[]
    bookId?: IntWithAggregatesFilter<"LlmResponse"> | number
    prompt?: StringWithAggregatesFilter<"LlmResponse"> | string
    response?: StringWithAggregatesFilter<"LlmResponse"> | string
  }

  export type BookTextCreateInput = {
    bookId: number
    text: string
  }

  export type BookTextUncheckedCreateInput = {
    bookId: number
    text: string
  }

  export type BookTextUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BookTextUncheckedUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BookTextCreateManyInput = {
    bookId: number
    text: string
  }

  export type BookTextUpdateManyMutationInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type BookTextUncheckedUpdateManyInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LlmResponseCreateInput = {
    bookId: number
    prompt: string
    response: string
  }

  export type LlmResponseUncheckedCreateInput = {
    bookId: number
    prompt: string
    response: string
  }

  export type LlmResponseUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type LlmResponseUncheckedUpdateInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type LlmResponseCreateManyInput = {
    bookId: number
    prompt: string
    response: string
  }

  export type LlmResponseUpdateManyMutationInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type LlmResponseUncheckedUpdateManyInput = {
    bookId?: IntFieldUpdateOperationsInput | number
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BookTextCountOrderByAggregateInput = {
    bookId?: SortOrder
    text?: SortOrder
  }

  export type BookTextAvgOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type BookTextMaxOrderByAggregateInput = {
    bookId?: SortOrder
    text?: SortOrder
  }

  export type BookTextMinOrderByAggregateInput = {
    bookId?: SortOrder
    text?: SortOrder
  }

  export type BookTextSumOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type LlmResponseBookIdPromptCompoundUniqueInput = {
    bookId: number
    prompt: string
  }

  export type LlmResponseCountOrderByAggregateInput = {
    bookId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type LlmResponseAvgOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type LlmResponseMaxOrderByAggregateInput = {
    bookId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type LlmResponseMinOrderByAggregateInput = {
    bookId?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
  }

  export type LlmResponseSumOrderByAggregateInput = {
    bookId?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}