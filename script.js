const fileinput = document.querySelector("input"),
    downloadbtn = document.querySelector("button");

downloadbtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadbtn.innerText = "Downloading File.....";
    fetchFile(fileinput.value);
});

function fetchFile(url) {
    fetch(url)
        .then((res) => res.blob())
        .then((file) => {
            let tempURL = URL.createObjectURL(file);
            let aTag = document.createElement("a");
            aTag.href = tempURL;
            aTag.download = url.split("/").pop();
            
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            URL.revokeObjectURL(tempURL);
            downloadbtn.innerText = "Download File";
        })
        .catch(() => {
            downloadbtn.innerText = "Download File";
            alert("Failed To download file !");
        });
}