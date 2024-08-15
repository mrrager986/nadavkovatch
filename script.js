const words = [
    "spiceny", "skurveny", "kokotsky", "prijebany", "idiotsky",
    "pripiceny", "skurvenko", "rozjebanko", "najebany", "buzerantsky",
    "idiotsky", "pro-izraelsky", "sasi moranovsky", "queer-geno",
    "imbecilny", "kokotisky", "kyjovsky", "dementny", "imbecilko",
    "a este", "najebanec", "pripic", "zajeb", "rododendronko",
    "skurvenisko", "raz kokot, navzdy kokotisko"
];

function generateWords() {
    const wordCount = document.getElementById('wordCount').value;
    let generatedWords = [];

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        generatedWords.push(words[randomIndex]);
    }

    const sentence = `ty si ${generatedWords.join(', ')} ?`;
    document.getElementById('wordOutput').innerText = sentence;
}
