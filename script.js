
var Lipides = new Array("Acide alpha-linoléique", "Acide arachidonique", "Acide linoléique", "Acide oléique", "Acide palmitique", "Acide stéarique", "Cholestérol", "Glycérol", "GM1 ganglioside", "Isoprene", "Phosphatidylcholine", "Phosphatidylethanolamine", "Phosphatidylglycerol", "Phosphatidylinositol", "Phosphatidylserine", "Sphingosine");
var Glucides = new Array("Saccharose", "Lactose", "Cellobiose", "Maltose", "Acide pyruvique", "Dihydroxyacetone", "Mannose", "N-acetyle-D-glucosamine", "NANA", "Beta-D-mannopyranose", "Acide beta-D-glucuronique", "Glucose", "B-D-glucosamine", "D-glyceradldehyde", "Galactose", "D-fructose", "Alpha-D-glucopyranose", "L-fructose", "Ribose", "2-Desoxy-D-ribofuranose", "Alpha-D-fructofuranose", "Beta-D-ribofuranose", "Beta-D-galactopyranose");
var Acide_amine = new Array("Serotonine", "Beta-alanine", "Histamine", "Glycine", "Histidine", "Valine", "Alanine", "Leucine", "Isoleucine", "Methionine", "Glutamate", "Asparate", "Phenylalanine", "Glutamine", "Asparagine", "Serine", "Tyrosine", "Threonine", "Proline", "GABA", "Cysteine", "Lysine", "Arginine", "Tryptophane");

var answers = new Array;
var goodanswer;
var switcher = Lipides;

function getRandomInt(tab) {
    return Math.floor(Math.random() * tab.length);
  }

function listAnswers(tab) {

    answers = [];
    var temp = [...tab]



    console.log(tab)

    for (let i = 0; i < 4; i++) {

        index = getRandomInt(temp);
        answers.push(temp.splice(index, 1));

    }
    
}

function chooseGoodAnswer() {

    goodanswer = getRandomInt(answers)

    document.getElementById("img").src = goodanswer

}

function changeList(list) {


    if (list === 0) {

        switcher = Lipides
    }
    if (list === 1) {

        switcher = Glucides
    }
    if (list === 2) {

        switcher = Acide_amine
    }
    changeAnswers()

}

function changeAnswers(rep, ) {


    if (rep === goodanswer) {

        console.log("Bonne réponse")

    } else {

        console.log("Mauvaise réponse")
    }


    listAnswers(switcher);
    chooseGoodAnswer();

    document.getElementById("img").innerHTML = answers[goodanswer];
    document.getElementById("rep1").innerHTML = answers[0];
    document.getElementById("rep2").innerHTML = answers[1];
    document.getElementById("rep3").innerHTML = answers[2];
    document.getElementById("rep4").innerHTML = answers[3];



}