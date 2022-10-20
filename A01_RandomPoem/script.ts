namespace ScriptRandomPoem {

    let subjectsArray: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicatesArray: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objectsArray: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    //console.log(subjectsArray, predicatesArray, objectsArray);

    for (let index = 6; index >= 1; index--) {

    
    //console.log (index)

    let finalSentence: string = getVerse (subjectsArray, predicatesArray, objectsArray);
    console.log(finalSentence);
}

    function getVerse (_subjectsArray, _predicatesArray, _objectsArray): string {
    
    let bausteinSubjects: number = Math.floor(Math.random() * _subjectsArray.length);
    let bausteinPredicates: number =  Math.floor(Math.random() * _predicatesArray.length);
    let bausteinObjects: number =  Math.floor(Math.random() * _objectsArray.length);

    let randomPoem: string = subjectsArray [bausteinSubjects] + " " + predicatesArray [bausteinPredicates] + " " + objectsArray [bausteinObjects] + ".";
    
    //console.log(zufallsSatz)

    _subjectsArray.splice(bausteinSubjects, 1);
    _predicatesArray.splice(bausteinPredicates, 1);
    _objectsArray.splice(bausteinObjects, 1);

    return randomPoem;

}}