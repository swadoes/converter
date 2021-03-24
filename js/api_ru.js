window.onload = function what() {


  async function getResponse() {


    let loaded = await fetch('https://scanyourpdf.softlex.pro/api/getMainPage')
    let contentp = await loaded.json();

    if (loaded.ok) {

      document.querySelector('#Description').innerHTML = contentp.data[0].Description;
      document.querySelector('#MainTitle').innerHTML = contentp.data[0].MainTitle;
      document.querySelector('#HelpTitle').innerHTML = contentp.data[0].HelpTitle;
      document.querySelector('#TextDescription1').innerHTML = contentp.data[0].TextDescription1;
      document.querySelector('#TextDescription2').innerHTML = contentp.data[0].TextDescription2;
      document.querySelector('#TextDescription3').innerHTML = contentp.data[0].TextDescription3;
      document.querySelector('#TextDescription4').innerHTML = contentp.data[0].TextDescription4;
      document.querySelector('#TextDescription5').innerHTML = contentp.data[0].TextDescription5;
      document.querySelector('#TextDescription6').innerHTML = contentp.data[0].TextDescription6;
      document.querySelector('#HelpDescription1').innerHTML = contentp.data[0].HelpDescription1;
      document.querySelector('#Feedback').innerHTML = contentp.data[0].Feedback;
      document.querySelector('#HelpDescription3').innerHTML = contentp.data[0].HelpDescription3;
      document.querySelector('#TextTitle1').innerHTML = contentp.data[0].TextTitle1;
      document.querySelector('#TextTitle2').innerHTML = contentp.data[0].TextTitle2;
      document.querySelector('#TextTitle3').innerHTML = contentp.data[0].TextTitle3;
      document.querySelector('#TextTitle4').innerHTML = contentp.data[0].TextTitle4;
      document.querySelector('#TextTitle5').innerHTML = contentp.data[0].TextTitle5;
      document.querySelector('#TextTitle6').innerHTML = contentp.data[0].TextTitle6;
      document.querySelector('#Email').innerHTML = contentp.data[0].Email;
      document.querySelector('#UrlImage1').innerHTML = contentp.data[0].UrlImage1;
      document.querySelector('#UrlImage2').innerHTML = contentp.data[0].UrlImage1;
      document.querySelector('#UrlImage3').innerHTML = contentp.data[0].UrlImage1;
      document.querySelector('#UrlImage4').innerHTML = contentp.data[0].UrlImage1;
      document.querySelector('#UrlImage5').innerHTML = contentp.data[0].UrlImage1;
      document.querySelector('#UrlImage6').innerHTML = contentp.data[0].UrlImage1;
      document.querySelector('#HelpDescription2').innerHTML = contentp.data[0].HelpDescription2;
    }

  }
  getResponse()

}
