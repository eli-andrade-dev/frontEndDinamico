let result =window.location.search;

const urlSearchParams = new URLSearchParams()

console.log('urlSearchParams: ', urlSearchParams.get('param1'))

urlSearchParams.set('param1', 'murilo')
urlSearchParams.set('param2', 'flesh')

let newURL = `${window.location.host}${window.location.pathname}?${urlSearchParams.toString()}`;

function onClickButton(){
   window.location.href (newURL);
}

if(window.location.search){
    console.log('if')
}else{
    console.log('else')
}