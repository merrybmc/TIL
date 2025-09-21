let foo = 1; // 전역 변수
{
  console.log(foo); // ReferenceError
  let foo = 2; // 지역 변수
}
