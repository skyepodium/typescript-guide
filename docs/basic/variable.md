# 변수

### 1) 기본타입
타입스크립트의 기본 타입은 총 12개가 있습니다.

## 1. string
```ts
const s: string = "Hello World"
```

## 2. number
```ts
const num: number = 100
```

### 3. boolean
```ts
const isEven: boolean = false
```

### 4. Array
- 리터럴 방식
```ts
const arr: number[] = [1, 2, 3]
```

- 제네릭 방식
`Java` 컬렉션 프레임워크의 선언 방식과 유사합니다.
```ts
const arr: Array<number> = [1, 2, 3]
```

### 5. 튜플
```ts
const arr: [string, number] = ['Hello world', 100];
```

### 6. null
`undefined` 대입이 가능합니다.
```ts
let a: null = null

a = undefined
```

### 7. undefined
`null` 대입이 가능합니다.
```ts
let a: undefined = undefined

a = null
```

### 8. enum
```
```

### 9. any
```
```

### 10. void
```
```

### 11. never
```
```
