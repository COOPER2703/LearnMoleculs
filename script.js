
var Lipides = new Array("Acide alpha-linoléique", "Acide arachidonique", "Acide linoléique", "Acide oléique", "Acide palmitique", "Acide stéarique", "Cholestérol", "Glycérol", "GM1 ganglioside", "Isoprene", "Phosphatidylcholine", "Phosphatidylethanolamine", "Phosphatidylglycerol", "Phosphatidylinositol", "Phosphatidylserine", "Sphingosine");
var Glucides = new Array("Saccharose", "Lactose", "Cellobiose", "Maltose", "Acide pyruvique", "Dihydroxyacetone", "Mannose", "N-acetyl-D-glucosamine", "NANA", "Beta-D-mannopyranose", "Acide beta-D-glucuronique", "Glucose", "B-D-glucosamine", "D-glyceraldehyde", "Galactose", "D-fructose", "Alpha-D-glucopyranose", "L-fructose", "Ribose", "2-desoxy-D-ribofuranose", "Alpha-D-fructofuranose", "Beta-D-Ribofuranose", "Beta-D-galactopyranose")
var Acides_amines = new Array("Serotonine", "Beta-alanine", "Histamine", "Glycine", "Histidine", "Valine", "Alanine", "Leucine", "Isoleucine", "Methionine", "Glutamate", "Aspartate", "Phenylalanine", "Glutamine", "Asparagine", "Serine", "Tyrosine", "Threonine", "Proline", "GABA", "Cysteine", "Lysine", "Arginine", "Tryptophane")

var answers = new Array;
var goodanswer;
var using_tab = Lipides;

function getRandomInt(tab) {
    return Math.floor(Math.random() * tab.length);
  }

function listAnswers(using_tab) {

    answers = [];
    
    var temp = [...using_tab]

    for (let i = 0; i < 4; i++) {

        index = getRandomInt(temp);
        answers.push(temp.splice(index, 1));

    }
    
}

function changeList(list) {

    if (list === 0) {
        using_tab = Glucides;
    }
    if (list === 1) {
        using_tab = Lipides;
    }
    if (list === 2) {
        using_tab = Acides_amines;
    }
    changeAnswers(0, false)
}

function chooseGoodAnswer() {

    goodanswer = getRandomInt(answers)

    document.getElementById("img").innerHTML = answers[goodanswer]
}


function verificate(rep) {

    if (rep === goodanswer) {

        console.log("Bonne réponse")

    } else {

        console.log("Mauvaise réponse")

    }

}

function changeAnswers(rep, condition) {

    console.log(goodanswer)

    if (condition) {
        verificate(rep)
    }
    
    listAnswers(using_tab)
    chooseGoodAnswer()

    document.getElementById("rep1").innerHTML= answers[0];
    document.getElementById("rep2").innerHTML= answers[1];
    document.getElementById("rep3").innerHTML= answers[2];
    document.getElementById("rep4").innerHTML= answers[3];

}