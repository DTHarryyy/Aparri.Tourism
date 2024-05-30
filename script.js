function ShowSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function CloseSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
function Credits() {
    const credits = document.querySelector('.credits');
    if( credits.style.display == 'flex'){
        credits.style.display = 'none'
    }
    else{
         credits.style.display = 'flex'
    }
}

function ProjectsHideOnMobile() {
    // const show = document.querySelector('.svg-show');
    // const showlabel = document.querySelector('.show-label');
    const projImgs = document.querySelector('.Proj-img-hide');
    projImgs.style.display = 'block';

    projImgs.forEach(img => {
        if (img.style.display === 'none') {
            img.style.display = 'block';
            // show.style.display = 'none';
        
        } else {
            img.style.display = 'none';
            // show.style.display = 'block';
        }
    });
}
  