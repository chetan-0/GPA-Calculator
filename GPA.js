function createInputFields() {
    document.getElementById("n").addEventListener("keypress", (e) => {
        if (e.key == "Enter")
            e.preventDefault();
    })
    let n = document.getElementById("n").value;
    document.getElementById("Enter").innerHTML = "<h1>Enter the grades and the credits</h1>"
    for (let i = 1; i <= n; i++) {
        let list = document.createElement("SELECT")
        list.setAttribute("id", "list" + i)

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



/*var getMarksWithoutFat = function () {
    var marksCat1 = parseFloat($('#nf-cat1').val());
    var marksCat2 = parseFloat($('#nf-cat2').val()); 
    var marksDa = parseFloat($('#nf-da').val()); 
    var marksAl = parseFloat($('#nf-al').val()) || 0; 
    var marksLab = parseFloat($('#nf-lab').val()); 
    var marksProj = parseFloat($('#nf-j-comp').val()); 
    var choice, netMarks; 
    if (marksLab && marksProj) { 
        choice = 3; 
    } 
    else if (marksLab && !marksProj) { 
        choice = 2; 
    } 
    else if (marksProj && !marksLab) { 
        choice = 1; 
    } 
    else if (!marksProj && !marksLab) { 
        choice = 0; 
    }
    
    
    
    var internals = ((marksCat1 + marksCat2) * 0.5 + marksDa); 
    const marksFat = internals + (2 / 3 * internals); internals += marksAl; 
    $('#nf-fat').val(marksFat.toFixed(1)); 
    var tot = (internals > 60 ? 60 : internals) + marksFat * 0.4; 
    switch (choice) { 
        case 0: netMarks = tot; break; 
        case 1: netMarks = tot * 0.75 + marksProj * 0.25; break; 
        case 2: netMarks = tot * 0.75 + marksLab * 0.25; break; 
        case 3: netMarks = tot * 0.6 + marksLab * 0.2 + marksProj * 0.2; break; 
    }
    if (isNaN(netMarks)) { 
        $('#modal-body').html('Insufficient Data !!'); 
        $('#modal-error').modal('show'); 
    }
    else { 
        $('.alert-nf-marks').show(); 
        $('#nf-marks').html(`<h1 class="result-text">${netMarks.toFixed(2)}</h1>`); 
    }
    console.log('getAds()', getAds())
    $('.adsNFEMC').html(getAds());
}

//////////////////////////////////////////////////////////////////////////j
var getMarks = function () {
    var marksCat1 = parseFloat($('#cat1').val()); 
    var marksCat2 = parseFloat($('#cat2').val()); 
    var marksDa = parseFloat($('#da').val()); 
    var marksAl = parseFloat($('#al').val()) || 0; 
    var marksLab = parseFloat($('#lab').val()); 
    var marksProj = parseFloat($('#j-comp').val()); 
    var marksFat = parseFloat($('#fat').val()); 
    var choice, netMarks; 
    if (marksLab && marksProj) { 
        choice = 3; 
    } 
    else if (marksLab && !marksProj) { 
        choice = 2; 
    } 
    else if (marksProj && !marksLab) { 
        choice = 1; 
    } 
    else if (!marksProj && !marksLab) { 
        choice = 0; 
    }
    var internals = ((marksCat1 + marksCat2) * 0.3 + marksDa + marksAl); 
    var tot = (internals > 60 ? 60 : internals) + marksFat * 0.4; 
    switch (choice) { 
        case 0: netMarks = tot; break; 
        case 1: netMarks = tot * 0.75 + marksProj * 0.25; break; 
        case 2: netMarks = tot * 0.75 + marksLab * 0.25; break; 
        case 3: netMarks = tot * 0.6 + marksLab * 0.2 + marksProj * 0.2; break; 
    }
    if (isNaN(netMarks)) { 
        $('#modal-body').html('Insufficient Data !!'); 
        $('#modal-error').modal('show'); 
    }
    else { 
        $('.alert-marks').show(); 
        $('#marks').html(`<h1 class="result-text">${netMarks.toFixed(2)}</h1>`); 
    }
    $('.adsEMC').html(getAds());
}
$('#submit').click(function () {
    document.getElementById('cgpa-msg').classList.remove("hide"); var cgpa = parseFloat($('#cgpa').val()); var gpa = parseFloat($('#gpa').val()); var c = parseFloat($('#c').val()); var tc = parseFloat($('#tc').val()); var f = (((cgpa * tc) + (gpa * c)) / (tc + c)); if (isNaN(f)) { $('#modal-body').html('Insufficient Data !!'); $('#modal-error').modal('show'); f = "Unavailable"; } else { $('.alert-cgpa-msg').show(); document.getElementById('cgpa-msg').innerHTML = `<h1 class="result-text">${f.toFixed(2)}</h1>`; }
    $('.adsQCC').html(getAds());
}); $('#sem-cgpa-btn').on('click', function () {
    var gpa1, gpa2, gpa3, gpa4, gpa5, gpa6, gpa7, gpa8, fc1 = 0, fc2 = 0, fc3 = 0, fc4 = 0, fc5 = 0, fc6 = 0, fc7 = 0, fc8 = 0, fcgpa = 0; gpa1 = $('#gpa1').val(); fc1 = $('#fc1').val(); if (gpa1 == '' || fc1 === '') { fc1 = 0; gpa1 = 0; }
    gpa2 = $('#gpa2').val(); fc2 = $('#fc2').val(); if (gpa2 == '' || fc2 === '') { fc2 = 0; gpa2 = 0; }
    gpa3 = $('#gpa3').val(); fc3 = $('#fc3').val(); if (gpa3 == '' || fc3 === '') { fc3 = 0; gpa3 = 0; }
    gpa4 = $('#gpa4').val(); fc4 = $('#fc4').val(); if (gpa4 == '' || fc4 === '') { fc4 = 0; gpa4 = 0; }
    gpa5 = $('#gpa5').val(); fc5 = $('#fc5').val(); if (gpa5 == '' || fc5 === '') { fc5 = 0; gpa5 = 0; }
    gpa6 = $('#gpa6').val(); fc6 = $('#fc6').val(); if (gpa6 == '' || fc6 === '') { fc6 = 0; gpa6 = 0; }
    gpa7 = $('#gpa7').val(); fc7 = $('#fc7').val(); if (gpa7 == '' || fc7 === '') { fc7 = 0; gpa7 = 0; }
    gpa8 = $('#gpa8').val(); fc8 = $('#fc8').val(); if (gpa8 == '' || fc8 === '') { fc8 = 0; gpa8 = 0; }
    fcgpa = ((parseFloat(gpa1) * fc1) + (parseFloat(gpa2) * fc2) + (parseFloat(gpa3) * fc3) + (parseFloat(gpa4) * fc4) + (parseFloat(gpa5) * fc5) + (parseFloat(gpa6) * fc6) + (parseFloat(gpa7) * fc7) + (parseFloat(gpa8) * fc8)) / (fc1 * 1 + fc2 * 1 + fc3 * 1 + fc4 * 1 + fc5 * 1 + fc6 * 1 + fc7 * 1 + fc8 * 1); if (isNaN(fcgpa)) { $('#modal-body').html('Insufficient Data !!'); $('#modal-error').modal('show'); }
    else { $('.alert-fcgpa').show(); $('#fcgpa').html(`<h1 class="result-text">${fcgpa.toFixed(2)}</h1>`); }
    $('.adsASCC').html(getAds());
}); $('#gbtn').on('click', function () {
    var g1 = 0, g2 = 0, g3 = 0, g4 = 0, g5 = 0, g6 = 0, g7 = 0, g8 = 0, g9 = 0, g10 = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0, c7 = 0, c8 = 0, c9 = 0, c10 = 0, sum = 0, gpa = 0; g1 = parseInt($('#g1').val()), g2 = parseInt($('#g2').val()), g3 = parseInt($('#g3').val()), g4 = parseInt($('#g4').val()), g5 = parseInt($('#g5').val()), g6 = parseInt($('#g6').val()), g7 = parseInt($('#g7').val()), g8 = parseInt($('#g8').val()), g9 = parseInt($('#g9').val()), g10 = parseInt($('#g10').val()), c1 = parseInt($('#c1').val()), c2 = parseInt($('#c2').val()), c3 = parseInt($('#c3').val()), c4 = parseInt($('#c4').val()), c5 = parseInt($('#c5').val()), c6 = parseInt($('#c6').val()), c7 = parseInt($('#c7').val()), c8 = parseInt($('#c8').val()), c9 = parseInt($('#c9').val()), c10 = parseInt($('#c10').val()); gpa = (c1 * g1 + c2 * g2 + c3 * g3 + c4 * g4 + c5 * g5 + c6 * g6 + c7 * g7 + c8 * g8 + c9 * g9 + c10 * g10) / (c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10); if (isNaN(gpa)) { $('#modal-body').html('Insufficient Data !!'); $('#modal-error').modal('show'); gpa = "Unavailable"; } else { $('.alert-grades').show(); $('#grades').html(`<h1 class="result-text">${gpa.toFixed(2)}</h1>`); }
    $('.adsGC').html(getAds());
}); function clearAll() { $('#g1').val('0'); $('#g2').val('0'); $('#g3').val('0'); $('#g4').val('0'); $('#g5').val('0'); $('#g6').val('0'); $('#g7').val('0'); $('#g8').val('0'); $('#g9').val('0'); $('#g10').val('0'); $('#c1').val('0'); $('#c2').val('0'); $('#c3').val('0'); $('#c4').val('0'); $('#c5').val('0'); $('#c6').val('0'); $('#c7').val('0'); $('#c8').val('0'); $('#c9').val('0'); $('#c10').val('0'); }
$('.cgpa-input').on('keyup', function () {
    var input = document.getElementById(this.id).value; if (!input == '') { var re = /^\d+\.?\d{0,2}$/; if (!(re.test(input))) { $('#modal-body').html('Please enter a valid data'); $('#modal-error').modal('show'); $(this).val(''); } }
    if ((input > 10 || input < 0) && this.id === 'gpa') { $('#modal-body').html('Your GPA should be between 0 and 10 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 10 || input < 0) && this.id === 'cgpa') { $('#modal-body').html('Your CGPA should be between 0 and 10 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 39 || input < 0) && this.id === 'c') { $('#modal-body').html('Your Credits should be between 16 and 39 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 250 || input < 0) && this.id === 'tc') { $('#modal-body').html('Your Credits should be between 0 and 250 !'); $('#modal-error').modal('show'); $(this).val(''); }
}); $('.form-control').on('keyup', function () {
    var input = document.getElementById(this.id).value; if (!input == '') { var re = /^\d+\.?\d{0,2}$/; if (!(re.test(input))) { $('#modal-body').html('Please enter a valid data'); $('#modal-error').modal('show'); $(this).val(''); } }
    if ((input > 10 || input < 0) && (this.id === 'gpa1' || this.id === 'gpa2' || this.id === 'gpa3' || this.id === 'gpa4' || this.id === 'gpa5' || this.id === 'gpa6' || this.id === 'gpa7' || this.id === 'gpa8')) { $('#modal-body').html('Your GPA should be between 0 and 10 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 50 || input < 0) && (this.id === 'cat1' || this.id === 'cat2' || this.id === 'nf-cat1' || this.id === 'nf-cat2')) { $('#modal-body').html('Your marks should be between 0 and 50 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 50 || input < 0) && (this.id === 'cat1' || this.id === 'cat2')) { $('#modal-body').html('Your marks should be between 0 and 50 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 30 || input < 0) && (this.id === 'nf-cat1' || this.id === 'nf-cat2')) { $('#modal-body').html('Your marks should be between 0 and 30 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 30 || input < 0) && (this.id === 'da' || this.id === 'nf-da')) { $('#modal-body').html('Your marks should be between 0 and 30 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 10 || input < 0) && (this.id === 'al' || this.id === 'nf-al')) { $('#modal-body').html('Additional Learning marks should be between 0 and 10 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 100 || input < 0) && (this.id === 'lab' || this.id === 'nf-lab' || this.id === 'j-comp' || this.id === 'nf-j-comp' || this.id === 'fat')) { $('#modal-body').html('Your marks should be between 0 and 100 !'); $('#modal-error').modal('show'); $(this).val(''); }
    else if ((input > 39 || input < 0) && (this.id === 'fc1' || this.id === 'fc2' || this.id === 'fc3' || this.id === 'fc4' || this.id === 'fc5' || this.id === 'fc6' || this.id === 'fc7' || this.id === 'fc8')) { $('#modal-body').html('Your Credits should be between 16 and 39 !'); $('#modal-error').modal('show'); $(this).val(''); }
});*/