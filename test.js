window.onload = function() { 
	// canvas 초기화, canvas 크기
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var width = window.innerWidth;
	var height = window.innerHeight;
	
	canvas.width = width; //canvas 너비
	canvas.height = height; // canvas 높이
	
	// 눈송이 입자
	var maxParticle = 25; // 최대 입자 수
	var particles = []; // 입자 배열
	
	for(var i=0; i<maxParticle; i++) {
		particles.push({ // 배열에 추가
			x : Math.random()*width, // x 좌표
			y : Math.random()*height, // y 좌표
			radius : Math.random()*4 + 1, // 반지름
			density : Math.random()*maxParticle // 밀도
		})
	}
	
	// 눈송이 그리기
	function draw() {
		context.clearRect(0, 0, width, height); // canvas 영역 화면 지우기
		context.fillStyle = "rgba(255, 255, 255, 0.8)"; // canvas 영역 색 설정
		context.beginPath(); // 눈송이 경로 그리기
		
		for(var i=0; i<maxParticle; i++) {
			var particle = particles[i];
			
			context.moveTo(particle.x, particle.y); // 지정된 좌표로 옮기기
			context.arc(particle.x, particle.y, particle.radius, 0, Math.PI*2, true); // '호'나 '원'을 그리기
		}
		
		context.fill();
		update();
	}
	
	// 눈송이 움직이게 하기, angle은 sin, cos 함수가 적용되어 눈송이의 수직, 수평이동을 생성
	var angle = 0;
	
	function update() {
		angle += 0.01;
		
		for(var i=0; i<maxParticle; i++) {
			var particle = particles[i];
			
			// x와 y 좌표 업데이트, cos 함수에 1을 추가하여 눈송이가 위로 이동하는 음수 값을 방지
			// particle.y : 눈송이가 자체 밀도를 가지고 있으며, 각각 다르게 만들어져 아래로 이동
			// particle.x : 반경을 추가하여 무작위로 생성 가능(?)
			particle.y += Math.cos(angle + particle.density) + 1 + particle.radius/2;
			particle.x += Math.sin(angle)*2;
			
			// 눈송이가 canvas 범위 밖으로 나갈 때 다시 위로 보내기, 좀 더 유기적으로 만들기위해 canvas 왼쪽과 오른쪽에서도 눈송이를 생성
			if(particle.x > width+5 || particle.x < -5 || particle.y > height) {
				if(i%3 > 0) {  // 눈송이의 66.67%
					particles[i] = {
						x : Math.random()*width,
						y : -10,
						radius : particle.radius,
						density : particle.density
					};
				} else {
					if(Math.sin(angle) > 0) { // 눈송이가 오른쪽에서 나오면
						particles[i] = { // 왼쪽에서 생성
							x : -5,
							y : Math.random()*height,
							radius : particle.radius,
							density : particle.density
						};
					} else {
						particles[i] = { // 오른쪽에서 생성
							x : width + 5,
							y : Math.random()*height,
							radius : particle.radius,
							density : particle.density
						};
					}
				}
			}
		}
	}
	
	// animation loop
	setInterval(draw, 33);
}
