# Intersection Type

- type 여러개를 `&`로 묶어서 `and`처럼 사용할 수 있다.

```typescript
type Student = {
  name: string;
  score: number;
};

type Worker = {
  employeeId: number;
  work: () => void;
};

function internWork(person: Student & Worker) {
  console.log(person.name, person.score, person.employeeId, person.work());
}

internWork({ name: 'byeongMin', score: 1, employeeId: 123, work: () => {} });
```
