var slider_img = document.querySelector('.slider-img');
var images = ['chris.jpeg', 'Elon.png', 'sport.png', 'plant.png'];
var texts = ['“การแสดงดนตรีในสภาวะไร้น้ำหนักเป็นอย่างไร”', 
                '"เราจะปกครองแบบไหนกันบนดาวอังคาร"', 
                '"การเล่นกีฬาบนอวกาศจะเป็นอย่างไร"', 
                '"สามารถปลูกพืชบนอวกาศได้ไหม"'];
var contents = [`คงเป็นไปไม่ได้ที่จะได้ยินเสียงใด ๆ บนอวกาศ เพราะอวกาศไม่มีตัวกลางในการส่งผ่านคลื่นเสียง<br/>แต่บนสถานีอวกาศนานาชาติมีอากาศ โดยมีนักบินชื่อ Chris Hadfield<br/>ได้บรรเลงเพลง "Space Oddity" บนสถานีอวกาศมาแล้ว`, 
                    `เราจะตั้งอาณานิคมกันอย่างไรบนดาวอังคาร ปัจจุบันได้เริ่มมีโครงการต่าง ๆ<br/>ที่ชี้ชัดถึงการที่มนุษย์จะนำอารยธรรมของตัวเองไปตั้งอยู่ที่นั่น<br/>ตัวอย่างเช่น โครงการ SpaceX ของ Elon Musk`, 
                    `แม้ปกติมนุษย์เราจะเล่นกีฬาภายใต้แรงโน้มถ่วงมาตตลอด<br/>แต่การออกกำลังกายก็เป็นสิ่งที่จำเป็นของนักบินอวกาศ<br/>เหล่านักบินอวกาศจึงพยายามคิดค้นหากิจกรรมที่สนุก และตื่นเต้นกว่าการออกกำัลังกายปกติ`, 
                    'จากการทดลองปลูกพืชในอวกาศหลายต่อหลายครั้ง<br/>ทำให้ค้นพบว่า แรงโน้มถ่วงเป็นปัจจัยที่ส่งผลต่อการงอกแต่ไม่ได้จำเป็น<br/>กล่าวคือ พืชสามารถอยู่ได้แม้ไม่มีแรงโน้มถ่วง และมันจะงอกตามสิ่งเร้าอย่างอื่นอย่างน้ำและแสงแทน'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg(), setText();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg(), setText();			 
}

function setImg(){
	return slider_img.setAttribute('src', "image/"+images[i]);
	
}

function setText(){
    return document.getElementById("slider_title").innerHTML = texts[i], document.getElementById("slider_content").innerHTML = contents[i];
}
