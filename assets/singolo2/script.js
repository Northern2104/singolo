let picturesContainer = document.getElementById('pictures');
window.onload = function pictures(){
	for(i=1;i<=12;i++){
		let newLink = document.createElement('a');
		newLink.setAttribute('href','#');
		let newImg = document.createElement ('img');
		newImg.setAttribute('src','assets/singolo2/main-pictures/Layer'+i+'.png')
		newImg.setAttribute('alt','Layout '+i);
		newLink.appendChild(newImg);
		picturesContainer.appendChild(newLink);
	};
};