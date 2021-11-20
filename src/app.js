let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dot = [".com", ".net", ".us", ".io"];
for (let a = 0; a < pronoun.length; a++) {
  const element1 = pronoun[a];
  for (let b = 0; b < adj.length; b++) {
    const element2 = adj[b];
    for (let c = 0; c < noun.length; c++) {
      const element3 = noun[c];
      for (let d = 0; d < dot.length; d++) {
        const element4 = dot[d];
        console.log(element1 + element2 + element3 + element4);
      }
    }
  }
}
