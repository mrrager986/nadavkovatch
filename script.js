const words = [
    "spiceny", "skurveny", "kokotsky", "prijebany", "idiotsky",
    "pripiceny", "skurvenko", "rozjebanko", "najebany", "buzerantsky",
    "idiotsky", "pro-izraelsky", "sasi moranovsky", "queer-geno",
    "imbecilny", "kokotisky", "kyjovsky", "dementny", "imbecilko"
];

function generateWords() {
    const wordCount = document.getElementById('wordCount').value;
    let generatedWords = [];

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        generatedWords.push(words[randomIndex]);
    }

    document.getElementById('wordOutput').innerText = generatedWords.join(', ');
}
