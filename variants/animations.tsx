export const Animations = {
    
    // fade-in-left animation
    FadeLeft: {
        hidden: {
            x: "-20%",
            opacity: 0,

        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: .5 }
        }
    },
}