

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }

}


  // ************************ Drag and drop ***************** //
  ; (D => {

    let ertype = D.querySelector(".file_format");
    const dropZone = D.querySelector('.drop-area')
    const input = D.querySelector('#fileElem')
    let file



    dropZone.addEventListener('dragover', ev => ev.preventDefault())

    dropZone.addEventListener('drop', ev => {

      ev.preventDefault()


      file = ev.dataTransfer.files[0]
      if (file.type === 'application/pdf') {

        document.getElementById("fileElem").files = ev.dataTransfer.files;
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          let file = ev.dataTransfer.files.item(i);
          let reader = new FileReader();
          reader.readAsDataURL(file);
        }

        handleFile(file)
      } else {

        ertype.style.display = 'block';
        D.querySelector(".drop-area").style.display = 'none';
      }
    })



    input.addEventListener('change', () => {


      file = input.files[0]
      if (file.type === 'application/pdf') {
        handleFile(file)
      } else {

        ertype.style.display = 'block';
        D.querySelector(".drop-area").style.display = 'none';
      }

    })

    const handleFile = file => {


      let prog = D.querySelector(".progress_bar");

      let formElement = document.querySelector(".my-form");
      let request = new XMLHttpRequest();
      let progress1 = D.querySelector('#progressbar1')

      request.upload.onprogress = function (e) {
        D.querySelector(".drop-area").style.display = 'none';
        prog.style.display = 'block';
        progress1.max = e.total;
        progress1.value = e.loaded;
        console.log(e.loaded)
        console.log(e.total)

      }


      request.open("POST", "https://scanyourpdf.softlex.pro/api/sendFile");


      request.send(new FormData(formElement));



      request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 202) {
          let data = JSON.parse(this.responseText);
          console.log(data);

          if (file.type === 'application/pdf') {

            prog.style.display = 'none';
            D.querySelector(".loaded").style.display = 'block';
            D.querySelector(".file_name").innerHTML = file.name;
            D.querySelector(".file_size").innerHTML = ((file.size / 1024).toFixed(2) + 'Kb');

            let removeBtn = document.querySelector('.delete');
            removeBtn.addEventListener('click', function () {
              let deleted = new XMLHttpRequest();
              let url = "https://scanyourpdf.softlex.pro/api/destroyFile/" + data.id;

              deleted.open("GET", url);

              deleted.send(url);
              document.querySelector('.file_deleted').style.display = 'block';
              document.querySelector(".loaded").style.display = 'none';
            }, false);



            let inputr = document.querySelector('#reload_file')
            let reloadbtn = document.querySelector('.reload_btn');
            document.getElementById('ids').value = data.id
            reloadbtn.addEventListener('click', function () {

              inputr.addEventListener('change', () => {
                file = inputr.files[0]

                let formElements = document.querySelector(".form");
                let request = new XMLHttpRequest();
                request.open("POST", "https://scanyourpdf.softlex.pro/api/updateFile");


                request.send(new FormData(formElements));

                request.onreadystatechange = function () {
                  let data = JSON.parse(this.responseText);

                  console.log(data)
                  document.getElementById('ids').value = data.id

                }

                D.querySelector(".file_name").innerHTML = file.name;
                D.querySelector(".file_size").innerHTML = ((file.size / 1024).toFixed(2) + 'Kb');

              })

            }, false);




            let prepare = D.querySelector('.reader');
            prepare.addEventListener('click', function (e) {

              data.id = JSON.parse(document.getElementById('ids').value)

              let send = new XMLHttpRequest();

              let url = "https://scanyourpdf.softlex.pro/api/convertFile/" + data.id;

              send.onprogress = function () {
                progresssNode = D.getElementById("progressbar2");


                let start = 20;
                let time = 70

                let interval = setInterval(() => {
                  if (start > 100) {

                    clearInterval()
                    url = "https://scanyourpdf.softlex.pro/api/getFile/" + data.id;
                    document.getElementById('Dow').href = url
                    document.getElementById('copy').value = url


                    D.querySelector('.switch_bar').style.display = 'none';
                    D.querySelector(".done").style.display = 'block';

                    D.querySelector(".file_names").innerHTML = file.name;
                    D.querySelector(".file_sizes").innerHTML = ((file.size / 1024).toFixed(2) + 'Kb');

                  } else {
                    progresssNode.value = start;
                  }
                  start++
                }, time);



              }

              send.open("GET", url);

              send.send(url);


              send.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 201) {
                  data = JSON.parse(this.responseText);
                }
              }
              D.querySelector('.switch_bar').style.display = 'block';
              D.querySelector(".loaded").style.display = 'none';





            });
          }
        }
        else if (this.status == 406) {
          document.querySelector('.file_pages').style.display = 'block'
          prog.style.display = 'none'

          return;
        }
      }


    }








  })(document, document.body);




function Myfunc() {
  let copyText = document.getElementById("copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");


}














function hideme(obj) {
  obj.parentNode.style.display = "none";

  document.querySelector('.drop-area').style.display = "block";
}












