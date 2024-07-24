interface Creator{
    name: string,
    imagePath: string,
    description: string,
    urls: {
        github: string,
        instagram: string,
        twitter: string,
    }
}

interface CreatorData {
    [name: string] : Creator,
}


const creatorData: CreatorData ={
    "Shuniji": {
        name: "Shuniji",
        imagePath: "/images/creatorProfiles/DragonEye.png",
        description: "Something about me that is long a should overlap and shit",
        urls: {
                github: "https://github.com/shuniji",
                instagram: "https://www.instagram.com/ma_plaszewski/",
                twitter: "https://x.com/dobrywieczor_",
        }
    },
    "EventfulLynx915": {
        name: "EventfulLynx915",
        imagePath: "/images/creatorProfiles/Undertow.png",
        description: "Something about me that is long and should overlap and shit",
        urls: {
            github: "https://github.com/AntonGavGav",
            instagram: "https://www.instagram.com/eventfullynx915/",
            twitter: "https://x.com/AntonGavGav1",
        }
    },
}
export default creatorData;