function buildMap(elementId){
    var theMap = document.getElementById(elementId);
    var list = document.createElement("ul");
    var sublist = document.createElement("ul");
    var classProjects = document.createElement("li");
    classProjects.textContent = "Class Projects";
    
    list.appendChild(buildList("Home", "index.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("About Me", "aboutme.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("Dab It", "dab.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("Pepsi", "pepsi.html"));
    theMap.appendChild(list);
    
    list.appendChild(buildList("What Is...?", "WHAT IS.html"));
    theMap.appendChild(list);
    
    list.appendChild(classProjects);
    theMap.appendChild(list);
    
    sublist.appendChild(buildList("Breakout", "breakout.html"));
    classProjects.appendChild(sublist);

    sublist.appendChild(buildList("Pop-Up", "popup.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("To Do List", "todolist.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Chalkboard", "chalkboard.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Tic-Tac-Toe", "tictactoe.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Math Thang", "Times Table.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("More Math Thangs", "tablewslide.html"));
    classProjects.appendChild(sublist);
    
    sublist.appendChild(buildList("Pythagorean Theorem Calculator", "PythagCalc.html"));
    classProjects.appendChild(sublist);   
}

function buildList(title, link){
    var element = document.createElement("a");
    var li = document.createElement("li");
    element.href = link;
    element.textContent = title;
    li.appendChild(element);
    return(li);
}
