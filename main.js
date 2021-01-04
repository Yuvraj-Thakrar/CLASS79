var name_of_students=[];

function sumbit(){
    var name1= document.getElementById("name1").value;
    var name2= document.getElementById("name2").value;
    var name3= document.getElementById("name3").value;
    var name4= document.getElementById("name4").value;

    name_of_students.push (name1);
    name_of_students.push (name2);
    name_of_students.push (name3);
    name_of_students.push (name4);

    console.log(name_of_students);
    document.getElementById("display_name").innerHTML=name_of_students;
    document.getElementById("sumbit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

} 
function sort(){
    name_of_students.sort();

    document.getElementById("display_name").innerHTML=name_of_students;
    console.log(name_of_students);
}