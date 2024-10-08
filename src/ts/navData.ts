interface NavItem{
    name: string;
    path: string;
}

const navData: NavItem[] =[
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about/",
    },
    {
        name: "Blog",
        path: "/blog/",
    },
]

export default navData;