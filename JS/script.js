function voirSolution(exercice) {
    switch (exercice) {
        case 1:
            alert("Solution exercice 1:\n\nfunction somme(a, b) {\n    return a + b;\n}");
            break;
        case 2:
            alert("Solution exercice 2:\n\nfunction afficher() {\n    for (let i = 1; i <= 10; i++) {\n        console.log(i);\n    }\n}");
            break;
        case 3:
            alert("Solution exercice 3:\n\nfunction max(a, b) {\n    return a > b ? a : b;\n}");
            break;
        default:
            alert("Exercice non trouvé.");
    }
}

function voirDemonstration(exercice) {
    switch (exercice) {
        case 1:
            console.log("Démonstration exercice 1:");
            console.log("Somme de 3 et 5: " + somme(3, 5));
            break;
        case 2:
            console.log("Démonstration exercice 2:");
            afficher();
            break;
        case 3:
            console.log("Démonstration exercice 3:");
            console.log("Le plus grand entre 7 et 4 est: " + max(7, 4));
            break;
        default:
            console.log("Exercice non trouvé.");
    }
}

// Solutions des fonctions pour les démonstrations
function somme(a, b) {
    return a + b;
}

function afficher() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function max(a, b) {
    return a > b ? a : b;
}
