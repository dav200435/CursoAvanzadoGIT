fetch("https://opentdb.com/api.php?amount=8&type=multiple")
.then(result=> result.json())
.then(r => {console.log(r)}) 