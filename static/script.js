function solveProblem() {
    let problem = document.getElementById("problem").value;
    
    fetch("/solve", {
        method: "POST",
        body: JSON.stringify({ problem: problem }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("solution").innerText = "Solution: " + data.solution;
    })
    .catch(error => console.error("Error:", error));
}
