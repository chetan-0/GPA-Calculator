
function createInputFields()
{
    let n=document.getElementById("n").value;
    for(let a=1;a<=n;a++)
    {
        let list=document.createElement("SELECT")
        list.setAttribute("id","list")

        let GRADE=document.createElement("OPTION")
        let grade=document.createTextNode("Grades")
        GRADE.appendChild(grade)
        list.appendChild(GRADE)

        let S=document.createElement("OPTION")
        let s=document.createTextNode("S")
        S.setAttribute("id","S")
        S.setAttribute("value","10")
        S.appendChild(s)
        list.appendChild(S)
        
        let A=document.createElement("OPTION")
        let a=document.createTextNode("A")
        A.setAttribute("id","A")
        A.setAttribute("value","9")
        A.appendChild(a)
        list.appendChild(A)

        let B=document.createElement("OPTION")
        let b=document.createTextNode("B")
        B.setAttribute("id","B")
        B.setAttribute("value","8")
        B.appendChild(b)
        list.appendChild(B)

        let C=document.createElement("OPTION")
        let c=document.createTextNode("C")
        C.setAttribute("id","C")
        C.setAttribute("value","7")
        C.appendChild(c)
        list.appendChild(C)

        let D=document.createElement("OPTION")
        let d=document.createTextNode("D")
        D.setAttribute("id","D")
        D.setAttribute("value","6")
        D.appendChild(d)
        list.appendChild(D)

        let E=document.createElement("OPTION")
        let e=document.createTextNode("E")
        E.setAttribute("id","E")
        E.setAttribute("value","5")
        E.appendChild(e)
        list.appendChild(E)

        let F=document.createElement("OPTION")
        let f=document.createTextNode("F")
        F.setAttribute("id","F")
        F.setAttribute("value","0")
        F.appendChild(f)
        list.appendChild(F)

        let N=document.createElement("OPTION")
        let n=document.createTextNode("N")
        N.setAttribute("id","N")
        N.setAttribute("value","0")
        N.appendChild(n)
        list.appendChild(N)

        document.body.appendChild(list)

    }
}