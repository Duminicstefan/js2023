//this is test
describe("helloWorld",()=>{
   it ("returns hello world",()=>{
        var actual = hello ();
        expect(actual).toBe("hello world")

    });
});
describe("Suma intregi",()=>{
  it  ("returns sum 5 si 3 = 8",()=>{
       expect(add(5,3)).toEqual(8);

    });
});
describe("imultire intregi",()=>{
    it  ("returns inm 5 si 3 = 15",()=>{
         expect(inm(5,3)).toEqual(15);
  
      });
  });

