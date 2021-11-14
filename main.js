var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var names_of_family_member_in_array = 5
    if(i > names_of_family_member_in_array)
      {
          i = names_of_family_member_in_array;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [i] ;
 
    document.getElementById("family_member_image").src = i;
    document.getElementById("family_member_name").innerHTML = i;
}
