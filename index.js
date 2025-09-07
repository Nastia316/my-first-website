function changeColor() {
    const colors = [
        '#f67f7fff', '#93ccecff', '#f3db6eff', '#f4b8e2ff', 
        '#50eae5ff', '#8f98f6ff', '#4745acff', '#82c785ff',
    ];
    const color1 = colors [Math.floor(Math.random()*colors.length)];
    const color2 = colors [Math.floor(Math.random()*colors.length)];

    document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;

}