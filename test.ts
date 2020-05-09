enum TabEnum {
  job = "job",
  ask = "ask",
  share = "share"
}
interface Entity{
  name: string,
  tab: TabEnum
}
function x(): Entity{
  let a = TabEnum.job;
  console.log(typeof a)
  return {
    name: "enoch",
    tab: a
  }
}
console.log(x())
