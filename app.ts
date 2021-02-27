(()=>{
  const friendA :string[]=['Josh', 'Mike', 'Doe', 'Chris'];
  const friendB :string[]=['Chris', 'Mary', 'Ann',"Doe","Josh"];
  const mutual :string[]=[];

  for (let i: number = 0; i < friendA.length; i++) {
    for (let b: number = 0; b < friendB.length; b++){
      if (friendA[i] === friendB[b]) {
        mutual.push(friendB[b])
      }
    }
  }
  console.log(`your mutual friends are ${mutual}`)
})()