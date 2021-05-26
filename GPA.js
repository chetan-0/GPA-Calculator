
function createInputFields()
{
    let n=document.getElementById("n").value;
    document.getElementById("Enter").innerHTML="<h1>Enter the grades and the credits</h1>"
    for(let i=1;i<=n;i++)
    {
        let list=document.createElement("SELECT")
        list.setAttribute("id","list"+i)

        let GRADE=document.createElement("OPTION")
        let grade=document.createTextNode("Grades")
        GRADE.setAttribute("value","0")
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

        let List=document.createElement('SELECT')
        List.setAttribute("id","List"+i)


        let CREDITS=document.createElement("OPTION")
        let credits=document.createTextNode("Credits")
        CREDITS.setAttribute("value","0")
        CREDITS.appendChild(credits)
        List.appendChild(CREDITS)

        
        let C1=document.createElement("OPTION")
        let c1=document.createTextNode("1")
        C1.setAttribute("id","C1")
        C1.setAttribute("value","1")
        C1.appendChild(c1)
        List.appendChild(C1)

        
        let C2=document.createElement("OPTION")
        let c2=document.createTextNode("2")
        C2.setAttribute("id","C2")
        C2.setAttribute("value","2")
        C2.appendChild(c2)
        List.appendChild(C2)

        
        let C3=document.createElement("OPTION")
        let c3=document.createTextNode("3")
        C3.setAttribute("id","C3")
        C3.setAttribute("value","3")
        C3.appendChild(c3)
        List.appendChild(C3)

        
        let C4=document.createElement("OPTION")
        let c4=document.createTextNode("4")
        C4.setAttribute("id","C4")
        C4.setAttribute("value","4")
        C4.appendChild(c4)
        List.appendChild(C4)

        
        let C5=document.createElement("OPTION")
        let c5=document.createTextNode("5")
        C5.setAttribute("id","C5")
        C5.setAttribute("value","5")
        C5.appendChild(c5)
        List.appendChild(C5)
        
        document.getElementById("Enter").appendChild(list)

        document.getElementById("Enter").appendChild(List)
    }
    let br=document.createElement("BR")
    document.getElementById("Enter").appendChild(br)
    pass()
}

function pass()
{
    let Btn=document.createElement("BUTTON")
    let t=document.createTextNode("Submit")
    Btn.appendChild(t)
    Btn.setAttribute("type","submit")
    Btn.setAttribute("id","Button2")
    Btn.setAttribute("onclick","calculation()")
    document.getElementById("Enter").appendChild(Btn)
}

function calculation()
{
    let n=document.getElementById("n").value;
    let grades=[],credits=[],sum=0,totalCredits=0,GPA;

    for(let i=1;i<=n;i++)
    grades[i]=document.getElementById("list"+i).value

    for(let j=1;j<=n;j++)
    credits[j]=document.getElementById("List"+j).value
    
    for(i=1;i<=n;i++)
    {
        sum+=(credits[i]*grades[i])
        totalCredits+=parseInt(credits[i])
    }
    GPA=sum/totalCredits
    // x=document.createTextNode(GPA)
    // document.body.appendChild(x)
    document.getElementById("answer").innerText= GPA;
}
