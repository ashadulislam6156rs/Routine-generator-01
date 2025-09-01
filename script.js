function getElementById(id) {
  return document.getElementById(id);
}

let routineParent = document.getElementById("routine-parent");

getElementById("body-element").addEventListener("click", (event) => {
  let numOfRows = Number(getElementById("input-rows").value);
  let numOfCols = Number(getElementById("input-cols").value);

    if (event.target.className.includes("Generate-btn")) {
    
    routineParent.classList.remove("border-4", "border-pink-500")
    routineParent.innerHTML = ""
    routineParent.classList.add("border-4", "border-pink-500")
    routineParent.style.display = "block";
    let div = document.createElement("div");
    div.innerHTML = `<h2 class="text-lg font-bold mb-5 text-pink-600 text-center">
         <textarea
                    class="auto-expand bg-transparent w-full h-full block px-2 py-1 outline-none text-center resize-none leading-tight align-middle overflow-hidden whitespace-pre-wrap"
                    rows="1"
                    placeholder="Enter Routine Title...."
                  ></textarea>
        </h2>
        <div class="overflow-x-auto">
          <table
            class="table-auto border-collapse border border-cyan-500 w-full text-center"
          >
            <thead class="bg-cyan-100">
              <tr id="table-row-header">
                
              </tr>
            </thead>
            <tbody id="table-body-data">
   
            </tbody>
          </table>
        </div>`;
  routineParent.appendChild(div);

    let tableHeader = getElementById("table-row-header");

    for (let index = 0; index < numOfCols; index++) {
      let creatTh = document.createElement("th");
      creatTh.className = "border-2 border-cyan-500 p-0 font-semibold max-w-32";
      creatTh.innerHTML = `<textarea
                    class="bg-transparent auto-expand w-full h-full block px-2 py-1 outline-none text-center resize-none leading-tight align-middle overflow-hidden whitespace-pre-wrap"
                    rows="1"
              
                  ></textarea>`;

      tableHeader.appendChild(creatTh);
    }

    let tableBody = getElementById("table-body-data");
    for (let index = 0; index < numOfRows - 1; index++) {
      let tableTr = document.createElement("tr");
      tableBody.appendChild(tableTr);

      for (let j = 0; j < numOfCols; j++) {
        let tableTd = document.createElement("td");
        tableTd.className = "border border-cyan-500 p-0 font-semibold max-w-32";
        tableTd.innerHTML = `<textarea
                    class="auto-expand bg-transparent w-full h-full block px-2 py-1 outline-none text-center resize-none leading-tight align-middle overflow-hidden whitespace-pre-wrap"
                    rows="1"
                  
                  ></textarea>`;
        tableTr.appendChild(tableTd);
      }
    }

    div.querySelectorAll(".auto-expand").forEach((textarea) => {
      textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
      });
    });
        // getElementById("input-rows").value = ""
        // getElementById("input-cols").value = ""
        
    }

    // let element = document.getElementById("routine-parent");
    
    if (event.target.className.includes("download-btn")) {
        console.log("clicked");
        

        var opt = {
        margin:       0.5,         
        filename:     'Routine.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },  
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
    };

  
    html2pdf().set(opt).from(routineParent).save();
    }

    if (event.target.className.includes("clear-btn")) {
        routineParent.innerHTML = ""
        routineParent.style.display = "none";
    }
});
