import {useEffect} from "react";

export const useAnimation = (selector) => {

    useEffect(() => {
        
        const animationItems = document.querySelectorAll(selector);

        if (animationItems.length > 0) {
            window.addEventListener('scroll', animOnScroll)

            function animOnScroll() {

                for (let i = 0; i < animationItems.length; i++) {
                    const animItem = animationItems[i];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }
                    if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add('animate')
                    }
                    // else {
                    //     if (!animItem.classList.contains('anim-no-hide')) {
                    //         animItem.classList.remove('active')
                    //     }
                    // }
                }
            }

            function offset(el) {
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
            }

            animOnScroll()
            return () => {
                window.removeEventListener('scroll', animOnScroll);
            };  
        }
    },[])
    
}