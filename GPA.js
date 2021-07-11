function createInputFields() {
    let n = document.getElementById("n").value;
    document.getElementById("Enter").innerHTML = "<h1 class = 'heading-1'>Enter Subjects and Credits</h1>"
    for (let i = 1; i <= n; i++) {
        let list = document.createElement("SELECT")
        list.setAttribute("id", "list" + i)
        list.setAttribute("class","form-select form-select-sm")

        let GRADE = document.createElement("OPTION")
        let grade = document.createTextNode("Grades")
        GRADE.setAttribute("value", "0")
        GRADE.appendChild(grade)
        list.appendChild(GRADE)

        let S = document.createElement("OPTION")
        let s = document.createTextNode("S")
        S.setAttribute("id", "S")
        S.setAttribute("value", "10")
        S.appendChild(s)
        list.appendChild(S)

        let A = document.createElement("OPTION")
        let a = document.createTextNode("A")
        A.setAttribute("id", "A")
        A.setAttribute("value", "9")
        A.appendChild(a)
        list.appendChild(A)

        let B = document.createElement("OPTION")
        let b = document.createTextNode("B")
        B.setAttribute("id", "B")
        B.setAttribute("value", "8")
        B.appendChild(b)
        list.appendChild(B)

        let C = document.createElement("OPTION")
        let c = document.createTextNode("C")
        C.setAttribute("id", "C")
        C.setAttribute("value", "7")
        C.appendChild(c)
        list.appendChild(C)

        let D = document.createElement("OPTION")
        let d = document.createTextNode("D")
        D.setAttribute("id", "D")
        D.setAttribute("value", "6")
        D.appendChild(d)
        list.appendChild(D)

        let E = document.createElement("OPTION")
        let e = document.createTextNode("E")
        E.setAttribute("id", "E")
        E.setAttribute("value", "5")
        E.appendChild(e)
        list.appendChild(E)

        let F = document.createElement("OPTION")
        let f = document.createTextNode("F")
        F.setAttribute("id", "F")
        F.setAttribute("value", "0")
        F.appendChild(f)
        list.appendChild(F)

        let N = document.createElement("OPTION")
        let n = document.createTextNode("N")
        N.setAttribute("id", "N")
        N.setAttribute("value", "0")
        N.appendChild(n)
        list.appendChild(N)
        
        let List = document.createElement('SELECT')
        List.setAttribute("id", "List" + i)
        List.setAttribute("class","form-select form-select-sm")


        let CREDITS = document.createElement("OPTION")
        let credits = document.createTextNode("Credits")
        CREDITS.setAttribute("value", "0")
        CREDITS.appendChild(credits)
        List.appendChild(CREDITS)


        let C1 = document.createElement("OPTION")
        let c1 = document.createTextNode("1")
        C1.setAttribute("id", "C1")
        C1.setAttribute("value", "1")
        C1.appendChild(c1)
        List.appendChild(C1)


        let C2 = document.createElement("OPTION")
        let c2 = document.createTextNode("2")
        C2.setAttribute("id", "C2")
        C2.setAttribute("value", "2")
        C2.appendChild(c2)
        List.appendChild(C2)


        let C3 = document.createElement("OPTION")
        let c3 = document.createTextNode("3")
        C3.setAttribute("id", "C3")
        C3.setAttribute("value", "3")
        C3.appendChild(c3)
        List.appendChild(C3)


        let C4 = document.createElement("OPTION")
        let c4 = document.createTextNode("4")
        C4.setAttribute("id", "C4")
        C4.setAttribute("value", "4")
        C4.appendChild(c4)
        List.appendChild(C4)


        let C5 = document.createElement("OPTION")
        let c5 = document.createTextNode("5")
        C5.setAttribute("id", "C5")
        C5.setAttribute("value", "5")
        C5.appendChild(c5)
        List.appendChild(C5)

        document.getElementById("Enter").appendChild(list)

        document.getElementById("Enter").appendChild(List)
    }
    let br = document.createElement("BR")
    document.getElementById("Enter").appendChild(br)
    pass()
}

function pass() {
    let Btn = document.createElement("BUTTON")
    let t = document.createTextNode("Submit")
    Btn.appendChild(t)
    Btn.setAttribute("type", "submit")
    Btn.setAttribute("id", "Button2")
    Btn.setAttribute("class","btn btn-primary btn-sm")
    Btn.setAttribute("onclick", "GPACalc()")
    document.getElementById("Enter").appendChild(Btn)
}

function GPACalc() {
    document.getElementById("Button2").addEventListener("submit", (e2) => {
        e2.preventDefault();
    })
    let n = document.getElementById("n").value;
    let grades = [], credits = [], sum = 0, totalCredits = 0, GPA;

    for (let i = 1; i <= n; i++)
        grades[i] = document.getElementById("list" + i).value

    for (let j = 1; j <= n; j++)
        credits[j] = document.getElementById("List" + j).value

    for (i = 1; i <= n; i++) {
        sum += (credits[i] * grades[i])
        totalCredits += parseInt(credits[i])
    }
    GPA = (sum / totalCredits).toFixed(2)
    // x=document.createTextNode(GPA)
    // document.body.appendChild(x)
    document.getElementById("answer").innerText = GPA;
}

function CGPACalc() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = parseFloat(document.getElementById("n3").value);
    let d = parseFloat(document.getElementById("n4").value);

    let CGPA = (((a * b) + (c * d)) / (a + c)).toFixed(2)
    document.getElementById("FinalCGPA").innerText = CGPA;
}

function TotalCGPACalc() {
    let a = [];
    let b = [];
    let sum = 0;
    let TotalCredits = 0;

    for (let i = 1; i <= 8; i++) {
        a[i] = parseFloat(document.getElementById("sem" + i + "GPA").value);
    }
    for (let i = 1; i <= 8; i++) {
        b[i] = parseFloat(document.getElementById("sem" + i + "credits").value);
    }

    for (i = 1; i <= 8; i++) {
        sum += a[i] * b[i];
        TotalCredits += b[i];
    }

    let TotalCGPA = (sum / TotalCredits).toFixed(2);
    document.getElementById("TotalCGPA").innerText = TotalCGPA;
}

function CalcMarks(){
    let Da = parseFloat(document.getElementById("DA marks").value);
    let lab = parseFloat(document.getElementById("Lab marks").value);
    let project = parseFloat(document.getElementById("Project marks").value);
    let AL = parseFloat(document.getElementById("Additional learning marks").value);
    let cat1 = parseFloat(document.getElementById("Cat1 marks").value);
    let cat2 = parseFloat(document.getElementById("Cat2 marks").value);
    let fat = parseFloat(document.getElementById("Fat marks").value);

    let choice, netMarks;
    if (lab && project) { 
        choice = 3; 
    } 
    else if (lab && !project) { 
        choice = 2; 
    } 
    else if (project && !lab) { 
        choice = 1; 
    } 
    else if (!project && !lab) { 
        choice = 0; 
    }
    let internals = ((cat1 + cat2) * 0.3 + Da + AL); 
    let tot = (internals > 60 ? 60 : internals) + fat * 0.4;

    switch (choice) { 
        case 0: 
            netMarks = tot; 
            break; 
        case 1: 
            netMarks = tot * 0.75 + project * 0.25;    
            break; 
        case 2:     
            netMarks = tot * 0.75 + lab * 0.25; 
            break; 
        case 3: 
            netMarks = tot * 0.6 + lab * 0.2 + project * 0.2; 
            break; 
    }
    netMarks=netMarks.toFixed(2)
    document.getElementById("PredictMarks").innerText = netMarks;
}

function PredictMinGPA()
{
    let N = parseFloat(document.getElementById("NOOfSem").value);
    let CreditsTillNow = parseFloat(document.getElementById("creditsTillNow").value);
    let CGPATillNow = parseFloat(document.getElementById("CGPATillNow").value);
    let ExpectedCGPA = parseFloat(document.getElementById("ExpectedCGPA").value);
    let TotNCredits = parseFloat(document.getElementById("TotNCredits").value);
    let MinGPA = ((ExpectedCGPA*(TotNCredits+CreditsTillNow)-(CreditsTillNow*CGPATillNow))/TotNCredits).toFixed(2)
    document.getElementById("GPAPredictor").innerText = MinGPA;
}


