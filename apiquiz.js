fetch("https://opentdb.com/api.php?amount=50&type=multiple")
.then(result => result.json())
.then(r => {console.log(r)})

