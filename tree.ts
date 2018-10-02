#!/usr/bin/env ts-node
{
  function prefix(n: number): string{
    return '----'.repeat(n)
  }
  class Person {
    public children: Person[] = []
    constructor(public name: string) { }
    sayHi(): void {
      console.log(this.name)
    }
    addChild(child: Person) {
      this.children.push(child)
    }
    intrdouceFamily(n?: number) {
      n = n || 1
      console.log(prefix(n-1) + this.name)
      this.children.forEach(child => {
        child.intrdouceFamily(n+1)
      })
    }
  }
  let p = new Person('林凌')
  let p1 = new Person('林依')
  let p2 = new Person('林尔')

  let p1_1 = new Person('林一伊')
  let p1_2 = new Person('林一洱')
  let p2_1 = new Person('林珥伊')
  let p2_2 = new Person('林珥尔')
  p.addChild(p1)
  p.addChild(p2)
  
  p1.addChild(p1_1)
  p1.addChild(p1_2)
  p2.addChild(p2_1)
  p2.addChild(p2_2)

  p.intrdouceFamily()
}