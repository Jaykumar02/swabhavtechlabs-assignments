const taskArray = [];
const completedArray = [];

const inputRef = document.querySelector("input");

const uRef = document.querySelector(".list")
const completedUlRef = document.querySelector(".completed")



function addTask() {
    
    const inputText = inputRef.value;
        taskArray.push(inputText);
   

    const ulRef = document.createElement("li")
    ulRef.innerText = inputText 

    

    uRef.appendChild(ulRef)

    const completeButton = document.createElement("button")
    completeButton.innerText = "Completed"
    ulRef.appendChild(completeButton)
    completeButton.addEventListener("click", () => {
        
        const completedList = document.createElement("li");
        completedList.innerText = inputText;

        
        completedArray.push(inputText);
        completedUlRef.appendChild(completedList);

        
        taskArray.splice(taskArray.indexOf(inputText), 1);
        uRef.removeChild(ulRef);


        const removeCompletedButton = document.createElement("button");
            removeCompletedButton.innerText = "Remove";
            completedList.appendChild(removeCompletedButton);

            removeCompletedButton.addEventListener("click", () => {
                completedUlRef.removeChild(completedList);
                completedArray.splice(completedArray.indexOf(inputText), 1);
                console.log("Completed Tasks:", completedArray);
            });
            console.log("Completed Tasks:", completedArray);

    });
    
    

    console.log("Completed Tasks:", completedArray);

    

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Remove"
    deleteButton.addEventListener('click',()=>{
             uRef.removeChild(ulRef)
    })
    ulRef.appendChild(deleteButton)
    

    console.log(taskArray);

    inputRef.value = ""
    
}






